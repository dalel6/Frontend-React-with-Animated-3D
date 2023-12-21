import "./AiInterface.css"; // Import your CSS file for styling
import Cube1 from "../Animation/Animation"; // Import your technology image

const AiInterface = () => {
	return (
		<div className="ai-interface">
			<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.391/build/spline-viewer.js"></script>

			<div className="image-content">
				<Cube1 />
			</div>
			<div className="text-content">
				<h1>
					We <span className="blue-text">consult</span>, <span className="blue-text">design </span> ,and{" "}
					<br />
					develop{" "}
					<span className="blue-text">
						artificial
						<br /> intelligence
					</span>
					-powered <br /> solutions
				</h1>

				<p>
					Our team of experts has a deep understanding of artificial intelligence
					<br />
					and how it can be used to improve business processes,
					<br />
					increase efficiency, and boost profits.
					<br /> We work with businesses to identify their specific needs
					<br /> and develop solutions that are tailored to their unique requirements.
				</p>
			</div>
		</div>
	);
};

export default AiInterface;
