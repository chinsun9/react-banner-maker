import React, {  useEffect, useRef } from 'react';
import useCanvas from '../hooks/useCanvas';
import useCanvasActions from '../hooks/useCanvasActions';
import './Canvas.css'

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const {width, height, font_color, font_size, background_color, text} = useCanvas();
  
  const { onChangeCanvas } = useCanvasActions();

  useEffect(() => {

  const drawCanvas = (ctx: any) => {

    ctx.clearRect(0, 0, width, height);

    // 폰트
    const color = font_color
    const fontFamily = 'Helvetica';

    // 배경색
    const backgroundColor = background_color

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    

    const fontSize = font_size

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    ctx.fillStyle = color;

    const defaultWidth = width / 2;
    const defaultHeight = height / 2;

    const fontHeight = fontSize * 1.4;
    const SEPARATOR = '\n';
    const lines = text.split(SEPARATOR);

    

    if (lines.length % 2) {
      lines.forEach((line, index) => {
        const middle = parseInt((lines.length / 2).toString(), 10);
        const h = defaultHeight + (index - middle) * fontHeight;
        ctx.fillText(line, defaultWidth, h);
        return null;
      });
    } else {
      const mid = (lines.length - 1) / 2;
      const offsets = lines
        .map((_line, index) => index)
        .reduce((prev: any[], curr) => {
          const subtract = curr - mid;
          prev.push([subtract < 0, parseInt(subtract.toString(), 10)]);
          return prev;
        }, []);
      offsets.forEach(([sign, offset], index) => {
        const position = offset * fontHeight;
        const e = sign ? (fontHeight / 2) * -1 : fontHeight / 2;
        const h = defaultHeight + position + e;
        ctx.fillText(lines[index], defaultWidth, h);
        return null;
      });
    }

  }
    
    const canvas = (canvasRef as any).current
    
    
    if(!canvas){
      console.info(`no canvas`);
      return;
    }
    
    const ctx = canvas.getContext('2d')
    
    //Our draw come here
    drawCanvas(ctx)
    onChangeCanvas(canvas.toDataURL())

  }, [width, height, font_color, font_size, background_color, text, onChangeCanvas])
  
  return (
    <div className="row">
        <canvas
          ref={canvasRef}
          id="myCanvas"
          width={width}
          height={height}
        >
          Your browser does not support the canvas element.
        </canvas>
      </div>
  );
}

export default Canvas;