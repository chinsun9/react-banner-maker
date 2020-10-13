import { ActionType } from 'typesafe-actions';
import { Canvas } from '../canvas';
import * as actions from './actions';

export type HistoryAction = ActionType<typeof actions>;



export type History = {
  id: number;
  value: Canvas
};

export type HistoryState = History[];
