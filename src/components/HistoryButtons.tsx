import React, { useRef, useState } from 'react';
import useHistory from '../hooks/useHistory';
import useSetHistory from '../hooks/useSetHistory';
import './HistoryButtons.css';

const initialState: InputFile = {
  selectedFile: null,
};

type InputFile = {
  selectedFile: File | null;
};

export default function HistoryButtons() {
  // const { } = useHistoryActions()

  const setHistory = useSetHistory();
  const history = useHistory();

  // const [fileState, setFileState] = useState(initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const onImport = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    // 같은 파일을 업로드할떄 onchange가 발동안해서 초기화
    inputRef.current.value = '';
    inputRef.current.click();
  };

  const onExport = () => {
    if (history.length === 0) {
      console.info('히스토리가 비어있음');
      return;
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(history, null, 2)], {
        type: 'text/plain',
      })
    );
    a.setAttribute('download', 'banner maker color history.json');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    console.log('ok', e.target.files[0].name);

    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);

    // setFileState({ selectedFile: e.target.files[0] });
  };

  const onReaderLoad = (event: any) => {
    var obj = JSON.parse(event.target.result);
    setHistory(obj);
  };

  return (
    <div className="HistoryButtons row">
      <input type="file" name="history_file" id="history_file" onChange={onChangeHandler} ref={inputRef} hidden />
      <button type="button" className="btn btn-second" onClick={onImport}>
        <i className="fas fa-upload"></i>
        import
      </button>
      <button type="button" className="btn btn-second" onClick={onExport}>
        <i className="fas fa-download"></i>
        export
      </button>
    </div>
  );
}
