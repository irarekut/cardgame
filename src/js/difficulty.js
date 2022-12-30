import { application } from '/src/js/application.js';
import { game } from '/src/js/index.js';
import { renderScreenStart } from '/src/js/start.js';

export function renderScreenDifficulty() {
    application.renderBlock('difficulty');
}
application.blocks['difficulty'] = renderBlockDifficulty;

function renderBlockDifficulty() {
    const block = document.createElement('div');
    block.classList = 'center block';
    const container = document.createElement('div');
    container.classList = 'container_';

    const header = document.createElement('h2');
    header.classList = 'container__header';
    header.textContent = 'Выбери сложность';

    const choice = document.createElement('div');
    choice.classList = 'choice_';

    const level1 = document.createElement('input');
    level1.setAttribute('type', 'radio');
    level1.classList = 'choice__input';
    level1.id = 'level-1';
    level1.name = 'radio';
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'level-1');
    label1.classList = 'choice__label';
    label1.textContent = '1';
    const level2 = document.createElement('input');
    level2.classList = 'choice__input';
    level2.setAttribute('type', 'radio');
    level2.id = 'level-2';
    level2.name = 'radio';
    const label2 = document.createElement('label');
    label2.setAttribute('for', 'level-2');
    label2.classList = 'choice__label';
    label2.textContent = '2';
    const level3 = document.createElement('input');
    level3.classList = 'choice__input';
    level3.setAttribute('type', 'radio');
    level3.id = 'level-3';
    level3.name = 'radio';
    const label3 = document.createElement('label');
    label3.setAttribute('for', 'level-3');
    label3.classList = 'choice__label';
    label3.textContent = '3';

    const button2 = document.createElement('button');
    button2.classList = 'choice__button';
    button2.textContent = '2';
    const button3 = document.createElement('button');
    button3.classList = 'choice__button';
    button3.textContent = '3';

    const startBtn = document.createElement('button');
    startBtn.classList = 'button';
    startBtn.textContent = 'Старт';

    game.appendChild(block);
    block.appendChild(container);
    container.appendChild(header);
    container.appendChild(choice);
    choice.appendChild(level1);
    choice.appendChild(label1);
    choice.appendChild(level2);
    choice.appendChild(label2);
    choice.appendChild(level3);
    choice.appendChild(label3);
    container.appendChild(startBtn);

    startBtn.addEventListener('click', () => {
        if (level1.checked === true) {
            application.level = 'level 1';
        }
        if (level2.checked === true) {
            application.level = 'level 2';
        }
        if (level3.checked === true) {
            application.level = 'level 3';
        }

        application.renderScreen('start');
    });
    application.screens['start'] = renderScreenStart;
}
