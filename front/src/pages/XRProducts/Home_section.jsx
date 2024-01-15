import product from "../../assets/product.mp4";
import "./Home_section.css";

const Home_section = () => {
	return (
		<div className="smart">
			<div className="overlay"></div>

			<video src={product} autoPlay loop muted />
			<div className="nav"></div>
			<div className="smartcities">
				<h1>
					 Website and Services Description
				</h1>
				<p>
					Iris Technologies is a cutting-edge software development and consulting company, specializing in a
					broad range of services.
					
				</p>
			</div>
		</div>
	);
};

export default Home_section;
