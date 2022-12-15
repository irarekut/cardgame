function renderScreenDifficulty() {
    game.innerHTML = '';

    window.application.blocks['difficulty', game] = renderBlockDifficulty();
    window.application.blocks.difficulty;
};

function renderBlockDifficulty() {
    const container = document.createElement('div');
    container.classList = 'center container_';

    const header = document.createElement('h2');
    header.classList = 'container__header';
    header.textContent = 'Выбери сложность';

    const choice = document.createElement('div');
    choice.classList = 'choice_';

    const button1 = document.createElement('button');
    button1.classList = 'choice__button';
    button1.textContent = '1';
    const button2 = document.createElement('button');
    button2.classList = 'choice__button';
    button2.textContent = '2';
    const button3 = document.createElement('button');
    button3.classList = 'choice__button';
    button3.textContent = '3';

    const start = document.createElement('button');
    start.classList = 'start';
    start.textContent = 'Старт';

    game.appendChild(container);
    container.appendChild(header);
    container.appendChild(choice);
    choice.appendChild(button1);
    choice.appendChild(button2);
    choice.appendChild(button3);
    container.appendChild(start);

}
