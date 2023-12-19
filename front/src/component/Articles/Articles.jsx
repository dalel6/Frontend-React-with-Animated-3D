import "./articles.css";
import FirstTitle from "../FirstTitle/FirstTitle";

const Articles = () => {
	return (
		<div className="container">
			<p className="container-title">
				<FirstTitle />
			</p>

			<div className="gradient-cards">
				<div className="card">
					<div className="container-card bg-green-box">
						<p className="card-title">Smart Claim</p>
						<p className="card-description">
							An AI solution for automating insurance claims, enhancing efficiency and accuracy.
							<br /> It streamlines the claims process, reducing manual errors and speeding up claim
							resolutions.
							<br /> Ideal for insurance companies seeking a more efficient claims handling process.{" "}
						</p>
					</div>
				</div>

				<div className="card">
					<div className="container-card bg-white-box">
						<p className="card-title">Smart Surveyor</p>
						<p className="card-description">
							Uses AI for precise surveying in various industries, ensuring data accuracy.
							<br /> This tool is invaluable for construction, real estate, and land management,
							<br />
							providing detailed surveys with minimal human intervention.
						</p>
					</div>
				</div>

				<div className="card">
					<div className="container-card bg-yellow-box">
						<p className="card-title">Smart Garage</p>
						<p className="card-description">
							AI-powered tool for automotive maintenance, offering smart diagnostics and service
							management It helps garage owners optimize their operations and provides customers with
							accurate, fast service.
						</p>
					</div>
				</div>

				<div className="card">
					<div className="container-card bg-blue-box">
						<p className="card-title">Car Assessor</p>
						<p className="card-description">
							An AI application for accurate car assessment, aiding in valuation and condition reporting.
							This tool is crucial for used car dealerships and rental companies to assess vehicle
							conditions accurately and quickly.
						</p>
					</div>
				</div>
				<div className="card">
					<div className="container-card bg-green-box">
						<p className="card-title">Drone Analysis</p>
						<p className="card-description">
							Leverages AI for analyzing drone-captured data, applicable in surveillance, mapping, and
							more. This solution is perfect for geographical mapping, agricultural monitoring, and urban
							planning, providing precise data analysis.
						</p>
					</div>
				</div>
				<div className="card">
					<div className="container-card bg-white-box">
						<p className="card-title">Satellite Imaging</p>
						<p className="card-description">
							AI-based analysis of satellite images for detailed earth observation and insights. Useful
							for environmental monitoring, resource management, and disaster response, offering
							comprehensive and detailed analysis of large-scale geographical data.
						</p>
					</div>
				</div>
				<div className="card">
					<div className="container-card bg-yellow-box">
						<p className="card-title">AI Chatbot</p>
						<p className="card-description">
							{" "}
							An intelligent chatbot solution powered by AI, enhancing customer interaction and support.
							It designed to provide immediate, accurate responses to customer queries, improving
							engagement and satisfaction.
						</p>
					</div>
				</div>
				<div className="card">
					<div className="container-card bg-blue-box">
						<p className="card-title">Digital Onboarding</p>
						<p className="card-description">
							Streamlines the digital onboarding process using AI, improving user experience and
							efficiency. This tool is ideal for businesses looking to enhance their digital presence and
							customer onboarding experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Articles;
