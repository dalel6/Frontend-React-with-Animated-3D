import "./AIInterface.css"; // Import your CSS file for styling
import Cube1 from "./animation"; // Import your technology image

const AIInterface = () => {
	return (
		<div className="ai-interface">
			<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.391/build/spline-viewer.js"></script>

			<div className="image-content">
				<Cube1 />
			</div>
			<div className="text-content">
				<h1>We consult, design, and develop artificial intelligence-powered solutions</h1>

				<p>
					Our team of experts has a deep understanding of artificial intelligence
					<br />
					and how it can be used to improve business processes, increase efficiency, and boost profits.
					<br /> We work with businesses to identify their specific needs
					<br /> and develop solutions that are tailored to their unique requirements.
				</p>
			</div>
		</div>
	);
};

export default AIInterface;
