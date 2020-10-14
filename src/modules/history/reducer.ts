import { createReducer } from 'typesafe-actions';
import { ADD_HISTORY, SET_HISTORY, REMOVE_HISTORY } from './actions';
import { HistoryAction, HistoryState } from './types';

// 초깃값 설정
const initialState: HistoryState = [
  // { id: 1, value:{ background_color:'#fff', font_color:'#000',font_size:20,height:300,text:"hello",width:300,dataURL:''} },
  // { id: 2, value:{ background_color:'#000', font_color:'#fff',font_size:30,height:320,text:"hello2",width:300,dataURL:''} },
  // { id: 3, value:{ background_color:'#123', font_color:'#fff',font_size:40,height:340,text:"hello3",width:300,dataURL:''} },
];

const history = createReducer<HistoryState, HistoryAction>(initialState, {
  [ADD_HISTORY]: (state, { payload: canvasValue }) =>
    state.concat({
      id: Math.max(0, ...state.map((historyItem) => historyItem.id)) + 1,
      value: canvasValue,
    }),
  [SET_HISTORY]: (state, { payload: list }) => {
    state = list;

    return state;
  },

  [REMOVE_HISTORY]: (state, { payload: id }) => state.filter((historyItem) => historyItem.id !== id),
});

export default history;
