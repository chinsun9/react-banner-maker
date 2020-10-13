import React, { CSSProperties, useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import useCanvas from '../hooks/useCanvas';
import useCanvasActions from '../hooks/useCanvasActions';
import reactCSS from 'reactcss'

import './SettingCanvasDetail.css'
import { getColorByBgColor, randomColorGenerator } from '../modules/common/utils';

function SettingCanvasSize() {

  const { font_size, font_color, background_color } = useCanvas();
  
  
  const {randomCanvasColor,onChangeCanvasFontSize,onChangeCanvasFontColor,onChangeCanvasBackgroundColor  } = useCanvasActions();

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
    
  //   const {name, value} = e.target
  //   onChangeCanvasSize({name:name,value: Number(value)})
  // }

  const randomBannerColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault()

    const background_color = randomColorGenerator()
    const font_color = getColorByBgColor(background_color)

    setFontColorPickerState({  ...fontColorPickerState, color: font_color })
    setBackgroundColorPickerState({  ...backgroundColorPickerState, color:background_color})
    randomCanvasColor({background_color:background_color,font_color:font_color})
  }

  const onChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()

    onChangeCanvasFontSize(Number( e.target.value))
  }
  
  const onChangeFontColor = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()

    setFontColorPickerState({  ...fontColorPickerState, color: e.target.value })
    onChangeCanvasFontColor(e.target.value)
  }
  
  
  const onChangeBackgroundColor = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()

    setBackgroundColorPickerState({  ...backgroundColorPickerState, color: e.target.value })
    onChangeCanvasBackgroundColor(e.target.value)
  }



  // color test

  type MyState = {
    displayColorPicker: boolean
    color: string
  }

  const initialBackgroundColorPickerState: MyState = {
    displayColorPicker: false,
    color: background_color
  };

  const initialFontColorPickerState: MyState = {
    displayColorPicker: false,
    color: font_color
  };

  const [backgroundColorPickerState, setBackgroundColorPickerState] = useState(initialBackgroundColorPickerState)
  const [fontColorPickerState, setFontColorPickerState] = useState(initialFontColorPickerState)
 

  // font
  const handleClickFontColor = () => {
    setFontColorPickerState({ ...fontColorPickerState, displayColorPicker: !fontColorPickerState.displayColorPicker })
  };

  const handleCloseFontColor = () => {
    setFontColorPickerState({  ...fontColorPickerState,displayColorPicker: false })
  };

  const handleChangeFontColor = (color: ColorResult) => {
    setFontColorPickerState({  ...fontColorPickerState, color: color.hex })
    onChangeCanvasFontColor(fontColorPickerState.color)
  };

  
  // background
  const handleClickBackgroundColor = () => {
    setBackgroundColorPickerState({ ...backgroundColorPickerState, displayColorPicker: !backgroundColorPickerState.displayColorPicker })
  };

  const handleCloseBackgroundColor = () => {
    setBackgroundColorPickerState({  ...backgroundColorPickerState,displayColorPicker: false })
  };

  const handleChangeBackgroundColor = (color: ColorResult) => {
    setBackgroundColorPickerState({  ...backgroundColorPickerState, color: color.hex })
    onChangeCanvasBackgroundColor(backgroundColorPickerState.color)
  };

  const styles = reactCSS({
    'default': {
      colorBackgroundColor: {
        width: '36px',
        height: '100%',
        borderRadius: '2px',
        background: `${backgroundColorPickerState.color}`,
      },
      colorFontColor: {
        width: '36px',
        height: '100%',
        borderRadius: '2px',
        background: `${fontColorPickerState.color}`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: 3 ,
      }  as CSSProperties,
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      } as CSSProperties,
    },
  });

  // color test
  

  return (
      <>
      <div className="SettingCanvasDetail row mb-2">
        <div className="input-group mb-3 ">
          <div className="input-group-prepend">
            <label
              className="input-group-text font-weight-bold"
              htmlFor="inputGroupSelect01"
              >Font Size</label>
          </div>

          <input
            type="Number"
            name="fontsize"
            className="form-control"
            list="fontsizelist"
            value={font_size}
            onChange={onChangeFontSize}
            id="inputGroupSelect01"
          />
          <datalist id="fontsizelist">
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
          </datalist>
        </div>

        <div id="fontColorPicker" className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1"
              >Font</span>
          </div>

          <input type="text" className="form-control input-lg" 
          value={fontColorPickerState.color}
          onChange={onChangeFontColor}  />

          <div className="input-group-append">
            <span className="input-group-text colorpicker-input-addon"><div>
              <div style={ styles.swatch } onClick={ handleClickFontColor }>
                <div style={ styles.colorFontColor } />
              </div>
              { fontColorPickerState.displayColorPicker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ handleCloseFontColor }/>
                <SketchPicker color={ fontColorPickerState.color } onChange={ handleChangeFontColor } />
              </div> : null }

            </div></span>
          </div>
        </div>

        <div
          id="backgroundColorPicker"
          className="input-group mb-3"
        >
          <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1"
              >Back</span
            >
          </div>

          <input type="text" className="form-control input-lg" 
          value={backgroundColorPickerState.color}
          onChange={onChangeBackgroundColor}
          />


          <div className="input-group-append">
            <span className="input-group-text colorpicker-input-addon"
              ><div>
              <div style={ styles.swatch } onClick={ handleClickBackgroundColor }>
                <div style={ styles.colorBackgroundColor } />
              </div>
              { backgroundColorPickerState.displayColorPicker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ handleCloseBackgroundColor }/>
                <SketchPicker color={ backgroundColorPickerState.color } onChange={ handleChangeBackgroundColor } />
              </div> : null }

            </div></span>
          </div>

          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={randomBannerColor}
              value="Random"
            >
              Random
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingCanvasSize;