import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addHistory } from '../modules/history';

export default function useAddHistory() {
  const dispatch = useDispatch();
  return useCallback((canvas) => dispatch(addHistory(canvas)), [dispatch]);
}
