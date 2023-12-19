import cities from "../../assets/cities.mp4";
import "./smart.css";
const Smart = () => {
	const handleClick = () => {
		// Handle the click event for the button
		alert("Button clicked!");
	};
	return (
		<div className="smart-cities-container">
			<div className="smart-cities-video">

			<video src={cities} autoPlay loop muted />
			</div>
			<div className="content-card" >

			<div className="smart-cities-content">
				<h1>Smart cities offering</h1>
				<p>
					Edge AI by PNY Technologies is at the forefront of AI and data analytics,
					<br /> offering a comprehensive range of products and solutions.
				</p>
				<button onClick={handleClick}>Learn More</button>
			</div>
			</div>
		</div>
	);
};

export default Smart;
