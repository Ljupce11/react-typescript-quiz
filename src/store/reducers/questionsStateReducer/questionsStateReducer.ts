import { State, Action } from '../../../interfaces/interfaces';

const initialState: State = {
  questionsData: [],
  trueAnswers: [],
  givenAnswers: []
};

// Store questions data in reducer and define actions
function questionsStateReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case 'UPDATE_INITIAL_STATE':
      return action.payload
    case 'UPDATE_QUESTIONS_DATA':
      return {
        ...state,
        questionsData: action.payload.questionsData
      };
    case 'UPDATE_GIVEN_ANSWERS':
      return {
        ...state,
        givenAnswers: action.payload.givenAnswers
      };
    case 'UPDATE_TRUE_ANSWERS':
      return {
        ...state,
        trueAnswers: action.payload.trueAnswers
      };
    default:
      return state;
  }
}

export default questionsStateReducer;