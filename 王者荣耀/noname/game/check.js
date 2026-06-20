import { lib, game, ui, get, ai, _status } from "../../../../noname.js"
export async function check() {
    //virtualCard
    if (lib.config.extension_王者荣耀_HOKCHOOSECARDPOPUP) {
        lib.hooks.checkCard.push((card, event) => {
            const player = get.player(),
                cards = ui.selected.cards;
            if (!event.checkCentralCards) event.checkCentralCards = [];
            for (const cardx of cards) {
                if (cardx._virtualCard) {
                    if (cards.includes(cardx._virtualCard)) cards.remove(cardx._virtualCard);
                    cards[cards.indexOf(cardx)] = cardx._virtualCard;
                }
                if (
                    event.selectCard !== -1 &&
                    player.countCards('h', cardxx => {
                        if (cardxx.classList.contains('selected')) return false;
                        return cardxx._virtualCard && cardxx._virtualCard == cardx;
                    })
                ) {
                    cards.remove(cardx);
                }
            }
            if (player.countCards('h', cardx => cardx._virtualCard == card)) return;
            if (typeof event.position == 'string' && event.filterCard(card, player, event) && !['h', 's'].includes(get.position(card))) {
                const vcard = ui.create.card();
                vcard.init(card);
                vcard.style.boxShadow = "none";
                vcard._virtualCard = card;
                vcard.addGaintag(get.position(card) + '_position');
                vcard.classList.add('glow');
                player.node[`handcards${get.is.singleHandcard() ? 1 : 2}`].appendChild(vcard);
                if (player == game.me || _status.video) ui.updatehl();
                if (event.filterCard(card, player, event)) vcard.classList.add("selectable");
            }
        });
        lib.hooks.uncheckCard.push((card, event) => {
            if (card._virtualCard) {
                card.remove();
                card.fix();
                card.destroyed = true;
                if (event.player == game.me || _status.video) ui.updatehl();
            }
            if (event.checkCentralCards) delete event.checkCentralCards;
        });
        //chooseButton card => button
        //checkCard trigger => complexCard、cancel => recheck
        if (lib.config.extension_王者荣耀_HOKCHOOSECARDPOPUP) {
            lib.hooks.checkEnd.push((event, { ok, auto, autoConfirm }) => {
                const player = event.player;
                if (!event || !player?.node) return;
                if (event.checkHiddenCards) {
                    if (!ui.selected.cards?.length) return;
                    const virtualCards = ui.selected.cards.map(card => card._virtualCard);
                    ui.selected.buttons = ui.selected.buttons.concat(virtualCards).toUniqued();
                }
                const container = player.node[`handcards${get.is.singleHandcard() ? 1 : 2}`]._childNodesWatcher.childNodes;
                for (const card of container) {
                    if (!card._virtualCard || !event.filterCard || !event.filterCard(card._virtualCard, player, event)) continue;
                    card.classList.add('selectable');
                }
            });
            lib.hooks.checkBegin.push((event) => {
                if (event?.name != 'chooseButton') return;
                if (
                    (() => {
                        const dialog = get.idDialog(event.dialog) || event.dialog || (Array.isArray(event.createDialog) ? 0 : ui.dialog);
                        if (!dialog?.buttons?.length) return false;
                        if (dialog.videoId || _status.dieClose.includes(dialog)) return false;
                        if (dialog._args?.length) {
                            if (dialog._args.filter(arg => Array.isArray(arg)).length > 1) return false;
                        }
                        return dialog.buttons.every(button => {
                            if (!button.innerText) return false;
                            return get.itemtype(button.link) == (Array.isArray(button) ? 'cards' : 'card');
                        });
                    })()
                ) {
                    if (!event.checkCentralCards) event.checkCentralCards = [];
                    ui.selected.buttons.addArray(ui.selected.cards.map(card => card._virtualCard));
                    let evt = event.parent,
                        player = get.player(),
                        handcards = player.node[`handcards${get.is.singleHandcard() ? 1 : 2}`],
                        container = handcards._childNodesWatcher.childNodes,
                        virtualContainer = container.filter(info => info._virtualCard),
                        dialog = get.idDialog(event.dialog) || event.dialog || (Array.isArray(event.createDialog) ? 0 : ui.dialog),
                        skill = event.skill || evt.skill || (evt.result && evt.result.skill) || evt.name,
                        buttons = dialog.buttons.filter(button => {
                            return get.itemtype(button.link) == (Array.isArray(button) ? 'cards' : 'card');
                        });
                    for (const virtual of virtualContainer) {
                        if (
                            (() => {
                                if (ui.selected.buttons.includes(virtual._virtualCard)) return false;
                                const range = event.selectButton;
                                return ui.selected.buttons.length >= range[1] || !event.filterButton(virtual._virtualCard, player);
                            })()
                        ) {
                            virtual.classList.remove("selectable");
                        }
                    }
                    if (
                        event.checkCentralCards.length &&
                        event.checkCentralCards.every(info => event.checkCentralCards.includes(info))
                    )
                        return;
                    if (buttons.length) {
                        buttons = buttons.reverse();
                        let handCards = player.getCards('hs');
                        event.checkHiddenCards = handCards;
                        handCards.forEach(card => card.classList.add('forcehide'));
                        event.checkCentralCards.addArray(buttons);
                        event.dialog.classList.add('forcehide');
                        const description = (event.dialog._args && event.dialog._args.length) ? event.dialog._args.filter(arg => typeof arg == 'string')[0] : get.prompt(skill);
                        event.skillInfoDialog = ui.create.dialog(description);
                        for (const button of buttons) {
                            const vcard = ui.create.card();
                            vcard.init(button.link);
                            vcard.style.boxShadow = "none";
                            vcard._virtualCard = button;
                            vcard.button = button;
                            vcard.link = button.link;
                            if (button.link.gaintag) vcard.addGaintag(button.link.gaintag);
                            handcards.insertBefore(vcard, handcards.firstChild);
                            if (player == game.me || _status.video) {
                                ui["updatehl2"]();
                            }
                            if (!event.filterButton || event.filterButton(button, player)) {
                                vcard.classList.add("selectable");
                            }
                        }
                    }
                }
            });
            lib.hooks.uncheckEnd.push((event) => {
                if (!event.checkHiddenCards?.length) return;
                event.checkHiddenCards.forEach(card => card.classList.remove('forcehide'));
                if (event.player == game.me || _status.video) ui.updatehl();
            });
            lib.hooks.uncheckButton.push((button, event) => {
                if (event.skillInfoDialog) event.skillInfoDialog.remove();
            });
        }
    }
}
