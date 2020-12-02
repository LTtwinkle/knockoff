import React, { useEffect } from 'react';
import Canvas from './canvas';

export default function canvas() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvasReal = canvasRef.current;
    Canvas(canvasReal, 400,400);
  },[]);

  return (
    <>
      <h3>this is collect play list page</h3>
      <canvas ref={canvasRef} />
    </>
  )
}