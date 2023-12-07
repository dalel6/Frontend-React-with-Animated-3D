// App.js
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import './cube.css';  // Import the CSS file

const Cube1 = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/qiHbv04Y05w7J3Nq/scene.splinecode');

  }, []);

  return (
    <div className='first_section'>
      {/* Canvas Element for Spline Scene */}
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Cube1;
