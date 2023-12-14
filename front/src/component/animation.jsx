// cube.jsx
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import './animation.css';  // Import the CSS file

const Cube1 = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/obLD85PL0rDBDtEi/scene.splinecode');

  }, []);

  return (
    <div className='first_section'>
      {/* Canvas Element for Spline Scene */}
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Cube1;
