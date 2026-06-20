import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
export default {
    name: 'ironBlade',
    start: async function () {
        ui.auto.hide()
        var dialog = ui.create.dialog('hidden');
        dialog.classList.add('fixed');
        dialog.classList.add('scroll1');
        dialog.classList.add('scroll2');
        dialog.classList.add('fullwidth');
        dialog.classList.add('fullheight');
        dialog.classList.add('noupdate');
        dialog.classList.add('character');
        dialog.contentContainer.style.overflow = 'visible';
        dialog.style.overflow = 'hidden';
        dialog.content.style.height = '100%';
        dialog.contentContainer.style.transition = 'all 0s'
        let iframe=document.createElement('iframe')
        iframe.src = ''
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        dialog.content.appendChild(iframe)
        if (!lib.storage.directStage) dialog.open()
    },
    ironBlade: {},
    ui: {
        create: {},
        update: {},
        destroy: {}
    },
    skill: {},
    element: {},
    game: {
        syncMenu: true,
        ironTech:[],
        ironTree:[],
    },
    get: {
        ironDistance: async function (from, to) { }
    },
    help: {}
}
export const config = {
    translate: "ironBlade",
    config: {}
}
