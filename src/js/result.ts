import { game } from '/src/js/index.ts';
import { renderScreenDifficulty } from './difficulty';
import { application } from '/src/js/application.ts';
import { nIntervId } from '/src/js/start.ts';

export function renderBlockResult() {
    const resultBackground = document.createElement('div');
    resultBackground.classList.add('center', 'result_');

    const resultBlock = document.createElement('div');
    resultBlock.classList.add('result__block');

    const resultImg = document.createElement('img');
    resultImg.classList.add('result__img');

    const resultCongrat = document.createElement('p');
    resultCongrat.classList.add('result__congrat');

    const resultTimeText = document.createElement('p');
    resultTimeText.classList.add('result__timeText');
    resultTimeText.textContent = 'Затраченное время:';

    const resultTime = document.createElement('p');
    resultTime.classList.add('result__time');
    resultTime.textContent = application.timer;

    const resultBtn = document.createElement('button');
    resultBtn.classList.add('button');
    resultBtn.textContent = 'Играть снова';

    game.prepend(resultBackground);
    game.appendChild(resultBlock);
    resultBlock.appendChild(resultImg);
    resultBlock.appendChild(resultCongrat);
    resultBlock.appendChild(resultTimeText);
    resultBlock.appendChild(resultTime);
    resultBlock.appendChild(resultBtn);

    resultBtn.addEventListener('click', () => {
        clearInterval(nIntervId);
        application.timer = 0;
        application.renderScreen('screenDifficulty');
    });
    application.screens['screenDifficulty'] = renderScreenDifficulty;

    if (application.result === true) {
        resultImg.src = '/static/win.png';
        resultCongrat.textContent = 'Вы выиграли!';
    } else {
        resultImg.src = '/static/lose.png';
        resultCongrat.textContent = 'Вы проиграли!';
    }
}
