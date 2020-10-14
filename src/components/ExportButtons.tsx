import React from 'react';
import useAddHistory from '../hooks/useAddHistory';
import useCanvas from '../hooks/useCanvas';
import useHistory from '../hooks/useHistory';
import { copyToClipboard } from '../modules/common/copyToClipboard';
import { saveAs } from '../modules/common/utils';
import './ExportButtons.css';

export default function ExportButtons() {
  const { text, dataURL, font_color, background_color } = useCanvas();
  const history = useHistory();

  const addHistory = useAddHistory();

  const copyBanner = () => {
    copyToClipboard();

    if (history.length === 0) {
      addHistory({ font_color, background_color });
      return;
    }

    const last_history_item = history[history.length - 1].value;
    if (last_history_item.background_color === background_color && last_history_item.font_color === font_color) {
      console.info(`이미 추가되어있음.`);
      return;
    }
    addHistory({ font_color, background_color });
  };

  const saveBanner = () => {
    const filename = 'banner-maker ';
    saveAs(dataURL, filename + text + '.png');
    addHistory({ font_color, background_color });
  };

  return (
    <div className="ExportButtons row">
      <button type="button" className="btn btn-primary" onClick={copyBanner}>
        <i className="far fa-clipboard"></i>
        Copy
      </button>

      <button type="button" className="btn btn-primary" onClick={saveBanner}>
        <i className="fas fa-download"></i>
        Download
      </button>
    </div>
  );
}
