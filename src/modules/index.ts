import { combineReducers } from 'redux';
import history from './history';
import canvas from './canvas';

const rootReducer = combineReducers({
  history,
  canvas,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
