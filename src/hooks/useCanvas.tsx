import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useCanvas() {
  const canvas = useSelector((state: RootState) => state.canvas);

  return canvas;
}
