characters = lib.config.dqzw_boss_bossList_mode
    ? (() => {
        let mode = lib.config.dqzw_boss_bossList_mode;
        let defaultList = lib.config[`dqzw_boss_${mode}_character_list_scheme`].default.list;
        return _status.connectMode ? lib.config[`connect_${mode}_dqzw_bossCharacterList`] || defaultList : lib.config[`${mode}_dqzw_bossCharacterList`] || defaultList;
    })()
    : lib.dqzw_bossCharacterList;
for (var i in lib.card) {
    const info = lib.card[i];
    if (!info.filterTarget && info.selectTarget) {
    }
}