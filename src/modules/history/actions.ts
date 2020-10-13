import { createAction } from 'typesafe-actions';
import { Canvas } from '../canvas';

// 액션 type
export const ADD_HISTORY = 'history/ADD_HISTORY';
export const REMOVE_HISTORY = 'history/REMOVE_HISTORY';

// 액션 생성 함수
export const addHistory = createAction(ADD_HISTORY)<Canvas>();
export const removeHistory = createAction(REMOVE_HISTORY)<number>();
