import { createAction } from 'typesafe-actions';

// 액션 type
export const SET_CANVAS_SIZE = 'canvas/SET_CANVAS_SIZE';
export const SET_CANVAS_TEXT = 'canvas/SET_CANVAS_TEXT';
export const SET_CANVAS_FONT_SIZE = 'canvas/SET_CANVAS_FONT_SIZE';
export const SET_CANVAS_FONT_COLOR = 'canvas/SET_CANVAS_FONT_COLOR';
export const SET_CANVAS_BACKGROUND_COLOR = 'canvas/SET_CANVAS_BACKGROUND_COLOR';
export const SET_CANVAS_COLOR = 'canvas/SET_CANVAS_COLOR';
export const SET_CANVAS_DATA_URL = 'canvas/SET_CANVAS_DATA_URL';

// 액션 생성 함수
export const setCanvasSize = createAction(SET_CANVAS_SIZE)<InputValue>();
export const setCanvasText = createAction(SET_CANVAS_TEXT)<string>();
export const setCanvasFontSize = createAction(SET_CANVAS_FONT_SIZE)<number>();
export const setCanvasFontColor = createAction(SET_CANVAS_FONT_COLOR)<string>();
export const setCanvasBackgroundColor = createAction(SET_CANVAS_BACKGROUND_COLOR)<string>();
export const setCanvasColor = createAction(SET_CANVAS_COLOR)<Colors>();
export const setCanvasDataURL = createAction(SET_CANVAS_DATA_URL)<string>();
