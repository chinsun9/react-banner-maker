import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { HistoryState, setHistory } from '../modules/history';

export default function useSetHistory() {
  const dispatch = useDispatch();

  return useCallback((list: HistoryState) => dispatch(setHistory(list)), [dispatch]);
}
