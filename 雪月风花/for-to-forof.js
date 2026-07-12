// for-to-forof.js
// 将安全的 for (let i = 0; i < arr.length; i++) { ... arr[i] ... } 转为 for (const i of arr) { ... i ... }
module.exports = function (fileInfo, api) {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    root.find(j.ForStatement).forEach((forPath) => {
        const { init, test, update, body } = forPath.node;

        // 1. 初始化：let/var i = 0
        if (!init || init.type !== 'VariableDeclaration') return;
        if (init.declarations.length !== 1) return;
        const decl = init.declarations[0];
        if (decl.id.type !== 'Identifier') return;
        const varName = decl.id.name;
        if (!decl.init || decl.init.type !== 'NumericLiteral' || decl.init.value !== 0) return;

        // 2. 条件：i < arr.length
        if (!test || test.type !== 'BinaryExpression' || test.operator !== '<') return;
        if (test.left.type !== 'Identifier' || test.left.name !== varName) return;
        if (test.right.type !== 'MemberExpression' || test.right.property.name !== 'length') return;
        const arrayExpr = test.right.object; // 可能是标识符、成员表达式等

        // 3. 更新：i++
        if (!update || update.type !== 'UpdateExpression' || update.operator !== '++') return;
        if (update.argument.type !== 'Identifier' || update.argument.name !== varName) return;

        // 4. 检查循环体内对 varName 的使用：
        //    - 只允许 arr[i] 形式（array 必须与 arrayExpr 匹配）
        //    - 不允许重新赋值或更新
        let hasValidAccess = false;
        let hasInvalidUse = false;

        const varRefs = j(body).find(j.Identifier, { name: varName });
        varRefs.forEach((refPath) => {
            const parent = refPath.parent;
            // 判断是否是 arr[i] 形式的 MemberExpression
            if (parent && parent.node.type === 'MemberExpression' && parent.node.property === refPath.node) {
                // 比较 object 是否与 arrayExpr 结构相同
                let isSame = false;
                // 如果两者都是标识符，比较名称
                if (arrayExpr.type === 'Identifier' && parent.node.object.type === 'Identifier') {
                    isSame = (arrayExpr.name === parent.node.object.name);
                } else {
                    // 否则使用 j.match 进行结构比较（忽略位置信息）
                    try {
                        isSame = j.match(parent.node.object, arrayExpr);
                    } catch (e) { /* fallback */ }
                }
                if (isSame) {
                    hasValidAccess = true;
                    return;
                }
            }
            // 其他任何使用（赋值、更新、作为参数等）都视为无效
            hasInvalidUse = true;
        });

        if (hasInvalidUse || !hasValidAccess) return;

        // 5. 执行转换
        const left = j.variableDeclaration('const', [
            j.variableDeclarator(j.identifier(varName))
        ]);
        const right = arrayExpr;

        // 替换 body 中所有与 arrayExpr 匹配的 arr[i] 为变量名
        j(body).find(j.MemberExpression, {
            property: { type: 'Identifier', name: varName }
        }).forEach((memPath) => {
            const memNode = memPath.node;
            let isSame = false;
            if (arrayExpr.type === 'Identifier' && memNode.object.type === 'Identifier') {
                isSame = (arrayExpr.name === memNode.object.name);
            } else {
                try {
                    isSame = j.match(memNode.object, arrayExpr);
                } catch (e) { /* ignore */ }
            }
            if (isSame) {
                memPath.replaceWith(j.identifier(varName));
            }
        });

        const newFor = j.forOfStatement(left, right, body);
        forPath.replaceWith(newFor);
    });

    return root.toSource();
};