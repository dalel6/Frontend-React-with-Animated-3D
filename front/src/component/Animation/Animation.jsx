// cube.jsx
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const Cube1 = () => {
	const canvasRef = useRef();

	useEffect(() => {
		const canvas = canvasRef.current;
		const app = new Application(canvas);
		app.load("https://prod.spline.design/obLD85PL0rDBDtEi/scene.splinecode");
	}, []);

	return (
		<div
			style={{
				minHeight: "300px",
			}}
		>
			<canvas
				style={{
					height: "300px",
				}}
				ref={canvasRef}
			></canvas>
		</div>
	);
};

export default Cube1;
