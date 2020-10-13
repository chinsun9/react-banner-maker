import { createReducer } from 'typesafe-actions';
import { getColorByBgColor, randomColorGenerator } from '../common/utils';
import {SET_CANVAS_DATA_URL, SET_CANVAS_SIZE, SET_CANVAS_TEXT, SET_CANVAS_FONT_SIZE, SET_CANVAS_FONT_COLOR, SET_CANVAS_BACKGROUND_COLOR, SET_CANVAS_COLOR } from './actions';
import { CanvasState, CanvasAction } from './types';

  
const initBackgroundColor = randomColorGenerator()
const initFontColor = getColorByBgColor(initBackgroundColor)

// 초깃값 설정
const initialState: CanvasState = {background_color:initBackgroundColor ,font_color:initFontColor,font_size:40,height:366,width:624,text:'TEXT',dataURL:''}
    
const canvas = createReducer<CanvasState, CanvasAction>(initialState, {
  [SET_CANVAS_SIZE]: (state, action) => 
    {
        return { ...state, [action.payload.name]: action.payload.value }
    },
    [SET_CANVAS_TEXT]: (state, action) => 
    {
        return { ...state, text: action.payload }
    },
    [SET_CANVAS_FONT_SIZE]: (state, action) => 
    {
        return { ...state, font_size: action.payload }
    },
    [SET_CANVAS_FONT_COLOR]:(state, action) => 
    {
        return { ...state, font_color: action.payload }
    },
    [SET_CANVAS_BACKGROUND_COLOR]:(state, action) => 
    {
        return { ...state, background_color: action.payload }
    },
    [SET_CANVAS_FONT_SIZE]:(state, action) => 
    {
        return { ...state, font_size: action.payload }
    },
    [SET_CANVAS_COLOR]:(state,action)=> 
    {
        const {background_color, font_color} = action.payload
        return { ...state, background_color: background_color, font_color:font_color }
    },
    [SET_CANVAS_DATA_URL]:(state, action)=> 
    {
        return { ...state, dataURL:action.payload }
    },
  });
  
export default canvas;
