import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  setCanvasDataURL,
  setCanvasSize,
  setCanvasText,
  setCanvasFontSize,
  setCanvasFontColor,
  setCanvasBackgroundColor,
  setCanvasColor,
} from '../modules/canvas';

export default function useCanvasActions() {
  const dispatch = useDispatch();

  const onChangeCanvasSize = useCallback((inputValue: InputValue) => dispatch(setCanvasSize(inputValue)), [dispatch]);
  const onChangeCanvasText = useCallback((text) => dispatch(setCanvasText(text)), [dispatch]);
  const onChangeCanvasFontSize = useCallback((size) => dispatch(setCanvasFontSize(size)), [dispatch]);
  const onChangeCanvasFontColor = useCallback((color) => dispatch(setCanvasFontColor(color)), [dispatch]);
  const onChangeCanvasBackgroundColor = useCallback((color) => dispatch(setCanvasBackgroundColor(color)), [dispatch]);
  const randomCanvasColor = useCallback((colors: Colors) => dispatch(setCanvasColor(colors)), [dispatch]);
  const onChangeCanvas = useCallback((dataURL) => dispatch(setCanvasDataURL(dataURL)), [dispatch]);

  return {
    onChangeCanvas,
    randomCanvasColor,
    onChangeCanvasSize,
    onChangeCanvasText,
    onChangeCanvasFontSize,
    onChangeCanvasFontColor,
    onChangeCanvasBackgroundColor,
  };
}
