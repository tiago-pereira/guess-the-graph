import * as types from './actionTypes';

export function startGame() {
  return {
    type: types.START_GAME
  };
}

export function confirmAnswer(isAnswerRight) {
  return {
    type: types.CONFIRM_ANSWER,
    isAnswerRight
  };
}
