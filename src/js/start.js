function renderScreenStart() {
    game.innerHTML = '';

    window.application.blocks[('start', game)] = renderBlockStartHead();
    window.application.blocks.start;

    window.application.blocks[('field', game)] = renderBlockStartField();
    window.application.blocks.field;
}

function renderBlockStartHead() {
    const headStart = document.createElement('div');
    headStart.classList = 'center head_';

    const timer = document.createElement('div');
    timer.classList = 'head__timer_';

    const min = document.createElement('div');
    const sek = document.createElement('div');

    const captionMin = document.createElement('p');
    captionMin.classList = 'head__timer__caption';
    captionMin.textContent = 'min';

    const captionSek = document.createElement('p');
    captionSek.classList = 'head__timer__caption';
    captionSek.textContent = 'sec';

    timerMin = document.createElement('div');
    timerMin.classList = 'head__timer__time';
    timerMin.textContent = '00';

    timerSek = document.createElement('div');
    timerSek.classList = 'head__timer__time sek';
    timerSek.textContent = '00';

    const buttonReset = document.createElement('button');
    buttonReset.classList = 'button head__button';
    buttonReset.textContent = 'Начать заново';

    game.appendChild(headStart);
    headStart.appendChild(timer);
    timer.appendChild(min);
    timer.appendChild(sek);
    min.appendChild(captionMin);
    min.appendChild(timerMin);
    sek.appendChild(captionSek);
    sek.appendChild(timerSek);
    headStart.appendChild(buttonReset);
}

function renderBlockStartField() {
    const field = document.createElement('div');
    field.classList = 'field_ center';

    game.appendChild(field);

    const cards = JSON.parse(cardDeck);

    function cardEngineTemplate(card) {
        return {
            tag: 'div',
            cls: 'field__card',
            attrs: {
                style: `background-image: url(${card.img_back})`,
            },
        };
    }
    field.appendChild(templateEngine(cards.map(cardEngineTemplate)));
}
