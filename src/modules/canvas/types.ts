import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CanvasAction = ActionType<typeof actions>;

export type Canvas = {
  width: number;
  height: number;
  text: string;
  font_size: number;
  font_color: string;
  background_color: string;
  dataURL: string;
};

export type CanvasState = Canvas;
