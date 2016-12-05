import * as types from '../actions/actionTypes';


const initialState = {
  inGame: false,
  questionNumber: 0,
  answer: undefined,
  points: 0
};

export default function game(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_GAME:
      console.log('startou');
      return {
        ...state,
        inGame: true
      };
    case types.CONFIRM_ANSWER:
      console.log('confirmou');

      console.log(state.points + 10);
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
        points: state.points + (action.isAnswerRight ? 10 : 0)
      };
    default:
      return state;
  }
}
