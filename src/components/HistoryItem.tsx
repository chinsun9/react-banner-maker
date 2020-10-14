import React from 'react';
import { History } from '../modules/history';
import reactCSS from 'reactcss';

import './HistoryItem.css';
import useCanvasActions from '../hooks/useCanvasActions';

type HistoryItemProps = {
  history: History;
};

function HistoryItem({ history }: HistoryItemProps) {
  const { randomCanvasColor } = useCanvasActions();

  const onApply = () => {
    const { background_color, font_color } = history.value;

    randomCanvasColor({
      background_color: background_color,
      font_color: font_color,
    });
  };

  const styles = reactCSS({
    default: {
      BackgroundColor: {
        background: `${history.value.background_color}`,
        color: `${history.value.font_color}`,
      },
    },
  });

  return (
    <div className={`col-1 HistoryItem`} style={styles.BackgroundColor} onClick={onApply}>
      <span className="remove">
        <strong>A</strong>
      </span>
    </div>
  );
}

export default HistoryItem;
