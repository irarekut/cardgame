import { application } from '/src/js/application.js';
import { game } from '/src/js/index.js';

export function renderScreenStart() {
    application.renderBlock('start');
    application.renderBlock('field');
}

application.blocks['start'] = renderBlockStartHead;
application.blocks['field'] = renderBlockStartField;

let arrCards;
let numberCards;

function renderBlockStartHead() {
    const headStart = document.createElement('div');
    headStart.classList = 'center head_';

    const timerContainer = document.createElement('div');
    timerContainer.classList = 'head__timer_';

    const min = document.createElement('div');
    const sek = document.createElement('div');

    const captionMin = document.createElement('p');
    captionMin.classList = 'head__timer__caption';
    captionMin.textContent = 'min';

    const captionSek = document.createElement('p');
    captionSek.classList = 'head__timer__caption';
    captionSek.textContent = 'sec';

    const timerMin = document.createElement('div');
    timerMin.classList = 'head__timer__time';
    timerMin.textContent = '00';

    const timerSek = document.createElement('div');
    timerSek.classList = 'head__timer__time sek';
    timerSek.textContent = '00';

    const buttonReset = document.createElement('button');
    buttonReset.classList = 'button head__button';
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
    let nIntervId;
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

    function addTime() {
        tick();
        if (minutes <= 9) {
            timerMin.textContent = '0' + minutes;
        } else {
            min.textContent = minutes;
        }
        if (seconds <= 9) {
            timerSek.textContent = '0' + seconds;
        } else {
            timerSek.textContent = seconds;
        }
        application.timer = timerMin.textContent + '.' + timerSek.textContent;
    }
    function timer() {
        nIntervId = setInterval(() => {
            addTime();
        }, 1000);
    }

    timer();

    buttonReset.addEventListener('click', () => {
        clearInterval(nIntervId);
        application.timer = 0;
        application.screens['screenDifficulty'] = renderScreenDifficulty();
        application.screens.screenDifficulty;
    });
    application.blocks['start'] = renderBlockStartHead;
}

function renderBlockStartField() {
    const field = document.createElement('div');
    field.classList = 'field_ center';

    game.appendChild(field);

    const cardDeck = JSON.parse(data);

    function getRandom(arr, n) {
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

    function getCardDeck(numberCards) {
        let arr = getRandom(cardDeck, numberCards);
        arrCards = [].concat(arr, Object.assign([], arr));
        arrCards.sort(() => Math.floor(Math.random() - 0.5));
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
            cardBox.classList = 'field__card';

            const imgCard = document.createElement('img');
            imgCard.classList = 'field__img';
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
        cardClick.classList.remove('hidden');
        application.idCards.push(cardClick.id);

        if (application.idCards.length === 2) {
            compareCards();
        }
    });

    function compareCards() {
        if (application.idCards[0] === application.idCards[1]) {
            application.idCards = [];
            alert('Вы победили');
        } else {
            application.idCards = [];
            alert('Вы проиграли');
        }
    }

    application.timers.push(setTimeout(cardsHidden, 5000));
    application.blocks['field'] = renderBlockStartField;
}
