import React from 'react';
import useCanvas from '../hooks/useCanvas';
import useCanvasActions from '../hooks/useCanvasActions';

import './SettingCanvasSize.css'

function SettingCanvasSize() {

  const {width, height} = useCanvas();
  
  
  const {onChangeCanvasSize} = useCanvasActions();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    
    const {name} = e.target
    let value = Number(e.target.value)
    
    if(value < 1){
      value = 1
    }
    onChangeCanvasSize({name:name,value: value})
  }
  

  return (
      <>
    <div className="SettingCanvasSize row mb-3">
        <div className="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold"
            >width</span
            >
        </div>
        <input
            type="number"
            className="form-control"
            name="width"
            value={width}
            placeholder="width"
            onChange={onChange}
            min="1"
        />
        </div>
        <div className="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" 
            >height</span
            >
        </div>
        <input
            type="number"
            className="form-control"
            name="height"
            value={height}
            placeholder="height"
            onChange={onChange}
            min="1"
        />
        </div>
    </div>
    </>
  );
}

export default SettingCanvasSize;