import React from 'react';
import useHistory from '../hooks/useHistory';
import HistoryItem from './HistoryItem';

import './HistoryList.css';


function HistoryList() {
    const history = useHistory();

  if (history.length === 0) return <p>copy, download 버튼을 누를때마다 히스토리에 추가됩니다</p>;
  
  return (
    <>
      {/* <h4>your color history</h4> */}
    <div className="HistoryList row">
      {history.map(history => (
        <HistoryItem history={history} key={history.id} />
      ))}
    </div>

    </>
  );
}

export default HistoryList; 