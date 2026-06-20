game.import('character', function (lib, game, ui, get, ai, _status) {
    var 随笔录 = {
        name: '随笔录',//武将包命名(必填)
        connectBanned: [],//联机禁将
        connect: true,//该武将包是否可以联机(必填)
    }
    for (var i in 武将包名字.character) {
        随笔录.character[i][4].push('ext:随笔录/yuanhua/' + i + '.jpg')
    }
    return 随笔录;
})