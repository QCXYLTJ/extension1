// for-to-forof.js - 精简版，无日志，去除多余空行
module.exports = function (fileInfo, api) {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    // 比较两个 AST 节点结构是否相同（仅用于判断是否为同一数组访问）
    function isSameNode(a, b) {
        if (!a || !b) return false;
        if (a.type !== b.type) return false;
        if (a.type === 'Identifier') {
            return a.name === b.name;
        }
        if (a.type === 'MemberExpression') {
            return isSameNode(a.object, b.object) && isSameNode(a.property, b.property);
        }
        return false; // 其他类型不匹配，直接返回 false
    }

    root.find(j.ForStatement).forEach((forPath) => {
        const { init, test, update, body } = forPath.node;

        // 1. 初始化必须为 var i = 0
        if (!init || init.type !== 'VariableDeclaration' || init.declarations.length !== 1) return;
        const decl = init.declarations[0];
        if (decl.id.type !== 'Identifier') return;
        if (!decl.init || decl.init.type !== 'Literal' || decl.init.value !== 0) return;
        const varName = decl.id.name;

        // 2. 条件必须为 i < arr.length
        if (!test || test.type !== 'BinaryExpression' || test.operator !== '<') return;
        if (test.left.type !== 'Identifier' || test.left.name !== varName) return;
        if (test.right.type !== 'MemberExpression' ||
            test.right.property.type !== 'Identifier' ||
            test.right.property.name !== 'length') return;
        const arrayExpr = test.right.object;

        // 3. 更新必须为 i++
        if (!update || update.type !== 'UpdateExpression' || update.operator !== '++') return;
        if (update.argument.type !== 'Identifier' || update.argument.name !== varName) return;

        // 4. 检查循环体：只能有 arr[i] 的使用，且不能有其他引用
        let hasValidAccess = false;
        let hasInvalidUse = false;
        const varRefs = j(body).find(j.Identifier, { name: varName });

        varRefs.forEach((refPath) => {
            const parent = refPath.parent;
            if (parent && parent.node.type === 'MemberExpression' && parent.node.property === refPath.node) {
                if (isSameNode(parent.node.object, arrayExpr)) {
                    hasValidAccess = true;
                } else {
                    hasInvalidUse = true;
                }
            } else {
                hasInvalidUse = true;
            }
        });

        if (!hasValidAccess || hasInvalidUse) return;

        // 5. 执行转换：替换 arr[i] 为 i（变量名）
        j(body).find(j.MemberExpression, {
            property: { type: 'Identifier', name: varName }
        }).forEach((memPath) => {
            if (isSameNode(memPath.node.object, arrayExpr)) {
                memPath.replace(j.identifier(varName));
            }
        });

        // 构建 for-of 语句并替换原 for
        const left = j.variableDeclaration('const', [
            j.variableDeclarator(j.identifier(varName))
        ]);
        const newFor = j.forOfStatement(left, arrayExpr, body);
        forPath.replace(newFor);
    });

    // 返回转换后的源码，并去除首尾多余空行
    return root.toSource().trim();
};