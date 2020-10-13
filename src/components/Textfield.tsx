import React, { CSSProperties } from 'react';
import useCanvas from '../hooks/useCanvas';
import useCanvasActions from '../hooks/useCanvasActions';
import './Textfield.css'

function Textfield() {
  const {text, width} = useCanvas();

  
  const {onChangeCanvasText} = useCanvasActions();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    
    const {value} = e.target
    onChangeCanvasText(value)
  }
  

  const textfieldStyle: CSSProperties = {
    width: width
  };

  return (
    <div className="row">
    <div className="form-group">
      <textarea
        className="form-control"
        id="textfield"
        placeholder="text here"
        rows={3}
        style={textfieldStyle}
        value={text}
        onChange={onChange}
      >
      </textarea>
    </div>
  </div>
  );
}

export default Textfield;