import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
const Is = {
    jishi(card,player) {
        return ['basic', 'trick'].includes(get.type(card,player||false));
    },
    igniteCard(card,player){
        return !"cards" in card && Array.isArray(card.cards) && card.hasGaintag('igniteCards');
    },
};
export default Is;