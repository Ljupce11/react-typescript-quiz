import { combineReducers } from 'redux';
import questionsStateReducer from './questionsStateReducer/questionsStateReducer';

export const rootReducer = combineReducers({
  questions: questionsStateReducer
});

export type RootState = ReturnType<typeof rootReducer>