import { game } from '/src/js/index.ts';

type obj = {
    blocks: render;
    screens: render;
    renderScreen: Function;
    renderBlock: Function;
    timers: Array<number>;
};

type render = {
    [index: string]: object;
};

export const application: obj = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName: string) {
        if (!application.screens[screenName]) {
            console.log('Такой страницы не существует');
        } else {
            game.innerHTML = '';
            this.screens[screenName]();
        }
    },
    renderBlock: function (blockName: string, container: any) {
        if (!application.blocks[blockName]) {
            console.log('Такого блока не существует');
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
};
