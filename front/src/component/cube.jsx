// SplineComponent.jsx
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const app = new Application(canvas);
        app.load('https://prod.spline.design/qiHbv04Y05w7J3Nq/scene.splinecode');
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>;
};

export default SplineComponent;

