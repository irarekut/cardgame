window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        if (!window.application.screens[screenName]) {
            console.log('Такой страницы не существует');
        } else {
            this.screens[screenName];
        }

        window.application.timers.forEach((element) => {
            clearInterval(element);
        });
    },
    renderBlock: function (blockName, container) {
        if (!window.application.blocks[blockName]) {
            console.log('Такого блока не существует');
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
};

const game = document.querySelector('.game');

window.application.screens['screenDifficulty'] = renderScreenDifficulty();
window.application.screens.screenDifficulty;
