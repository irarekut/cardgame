import { game } from '/src/js/index.js';
export const application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        if (!application.screens[screenName]) {
            console.log('Такой страницы не существует');
        } else {
            game.innerHTML = '';
            this.screens[screenName]();
        }
    },
    renderBlock: function (blockName, container) {
        if (!application.blocks[blockName]) {
            console.log('Такого блока не существует');
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
};
