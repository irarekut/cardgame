import { game } from '/src/js/index.ts';
import { renderScreenDifficulty } from '/src/js/difficulty.ts';
import { application } from '/src/js/application.ts';
import { data } from '/src/js/cardDeck.ts';
import { renderBlockResult } from '/src/js/result.ts';

export function renderScreenStart() {
    application.renderBlock('start');
    application.renderBlock('field');
}

application.blocks['start'] = renderBlockStartHead;
application.blocks['field'] = renderBlockStartField;

let numberCards: number;
let arrCards: any[];
let timeGame: string;
export let nIntervId: NodeJS.Timer;

function renderBlockStartHead() {
    const headStart = document.createElement('div');
    headStart.classList.add('center', 'head_');

    const timerContainer = document.createElement('div');
    timerContainer.classList.add('head__timer_');

    const min = document.createElement('div');
    const sek = document.createElement('div');

    const captionMin = document.createElement('p');
    captionMin.classList.add('head__timer__caption');
    captionMin.textContent = 'min';

    const captionSek = document.createElement('p');
    captionSek.classList.add('head__timer__caption');
    captionSek.textContent = 'sec';

    const timerMin = document.createElement('div');
    timerMin.classList.add('head__timer__time');
    timerMin.textContent = '00';

    const timerSek = document.createElement('div');
    timerSek.classList.add('head__timer__time', 'sek');
    timerSek.textContent = '00';

    const buttonReset = document.createElement('button');
    buttonReset.classList.add('button', 'head__button');
    buttonReset.textContent = 'Начать заново';

    game.appendChild(headStart);
    headStart.appendChild(timerContainer);
    timerContainer.appendChild(min);
    timerContainer.appendChild(sek);
    min.appendChild(captionMin);
    min.appendChild(timerMin);
    sek.appendChild(captionSek);
    sek.appendChild(timerSek);
    headStart.appendChild(buttonReset);

    let minutes = 0;
    let seconds = 0;
    application.idCards = [];

    function tick() {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
            if (minutes >= 60) {
                minutes = 0;
            }
        }
    }
    function timer() {
        nIntervId = setInterval(() => {
            tick();
            if (minutes <= 9) {
                timerMin.textContent = '0' + minutes;
            } else {
                min.textContent = minutes.toString();
            }
            if (seconds <= 9) {
                timerSek.textContent = '0' + seconds;
            } else {
                timerSek.textContent = seconds.toString();
            }
            timeGame = timerMin.textContent + '.' + timerSek.textContent;
        }, 1000);
    }

    timer();

    buttonReset.addEventListener('click', () => {
        clearInterval(nIntervId);
        application.timer = 0;
        application.renderScreen('screenDifficulty');
    });
    application.screens['screenDifficulty'] = renderScreenDifficulty;
    application.blocks['start'] = renderBlockStartHead;
}

function renderBlockStartField() {
    const containerStart = document.createElement('div');
    containerStart.classList.add('containerStart', 'center');
    const field = document.createElement('div');
    field.classList.add('field_');

    game.appendChild(containerStart);
    containerStart.appendChild(field);

    function getRandom(arr: Array<string>, n: number) {
        let result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError(
                'getRandom: more elements taken than available'
            );
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len;
        }
        return result;
    }
    console.log(data);
    const cardDeck = JSON.parse(data);

    function getCardDeck(numberCards: number) {
        let arr = getRandom(cardDeck, numberCards);
        arrCards = [].concat(arr, Object.assign([], arr));
        arrCards.sort(() => Math.floor(Math.random() - 0.5));
        console.log('arrCards' + arrCards);
    }

    function level() {
        if (application.level === 'level 1') {
            numberCards = 3;
        }
        if (application.level === 'level 2') {
            numberCards = 6;
        }
        if (application.level === 'level 3') {
            numberCards = 9;
        }
    }
    level();
    getCardDeck(numberCards);

    function cardFieldRender() {
        for (let i = 0; i < arrCards.length; i++) {
            const cardBox = document.createElement('div');
            cardBox.classList.add('field__card');

            const imgCard = document.createElement('img');
            imgCard.classList.add('field__img');
            imgCard.src = arrCards[i].img_front;
            imgCard.id = arrCards[i].name;

            field.appendChild(cardBox);
            cardBox.appendChild(imgCard);
        }
    }

    cardFieldRender();

    const imgCards = document.querySelectorAll('.field__img');

    function cardsHidden() {
        for (const imgCard of imgCards) {
            imgCard.classList.add('hidden');
        }
    }

    field.addEventListener('click', (event) => {
        const cardClick = event.target;
        (cardClick as HTMLElement).classList.remove('hidden');
        application.idCards.push((cardClick as HTMLElement).id);

        if (application.idCards.length === 2) {
            if (application.idCards[0] === application.idCards[1]) {
                numberCards = numberCards - 1;
                if (numberCards === 0) {
                    application.result = true;
                    application.idCards = [];
                    application.timer = timeGame;
                    application.renderBlock('result');
                    clearInterval(nIntervId);
                } else {
                    application.idCards = [];
                    return;
                }
            } else {
                application.idCards = [];
                application.timer = timeGame;
                application.result = false;
                application.renderBlock('result');
                clearInterval(nIntervId);
            }
        }
    });

    application.timers.push(setTimeout(cardsHidden, 5000));
    application.timers.push(setTimeout(cardsHidden, 5000));
    application.blocks['field'] = renderBlockStartField;
    application.blocks['result'] = renderBlockResult;
}
