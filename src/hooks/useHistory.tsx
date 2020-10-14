import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useHistory() {
  const history = useSelector((state: RootState) => state.history);

  return history;
}
