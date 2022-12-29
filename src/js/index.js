import { application } from '/src/js/application.js';
import { renderScreenDifficulty } from './difficulty.js';

export const game = document.querySelector('.game');

application.screens['screenDifficulty'] = renderScreenDifficulty;

application.renderScreen('screenDifficulty');
