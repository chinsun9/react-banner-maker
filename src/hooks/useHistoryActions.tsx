import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { removeHistory } from '../modules/history';

export default function useHistoryActions(id: number) {
  const dispatch = useDispatch();

  const onRemove = useCallback(() => dispatch(removeHistory(id)), [dispatch, id]);

  return { onRemove };
}
