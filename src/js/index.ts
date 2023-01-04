import '/src/style/style.css';

export const game = document.querySelector<HTMLElement>('.game');

import { application } from '/src/js/application.ts';
import { renderScreenDifficulty } from './difficulty.ts';

application.screens['screenDifficulty'] = renderScreenDifficulty;

application.renderScreen('screenDifficulty');
