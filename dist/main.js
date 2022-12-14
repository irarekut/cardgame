(window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (e) {
        window.application.screens[e]
            ? this.screens[e]
            : console.log('Такой страницы не существует'),
            window.application.timers.forEach((e) => {
                clearInterval(e);
            });
    },
    renderBlock: function (e, n) {
        window.application.blocks[e]
            ? this.blocks[e](n)
            : console.log('Такого блока не существует');
    },
    timers: [],
}),
    document.querySelector('.game'),
    (window.application.screens.screenDifficulty = renderScreenDifficulty()),
    window.application.screens.screenDifficulty;
