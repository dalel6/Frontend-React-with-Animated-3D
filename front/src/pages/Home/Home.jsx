import AiInterface from "../../component/AiInterface/AiInterface";
import SmallBigCards from "../../component/SmallBigCards/SmallBigCards";
import cities from "../../assets/cities.mp4";
import product from "../../assets/product.mp4";
import Articles from "../../component/Articles/articles";
import Cave from "../../component/Cave/Cave";
import Metaverse from "../../component/Metaverse/Metaverse";
import Contact from "../../component/Contact/Contact";

import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div id="Home">
				<AiInterface />
			</div>
			<div>
				<h1
					style={{
						width: "100%",
						backgroundColor: "bleu",
						textAlign: "center",
						color: "#646cff",
					}}
				>
					{" "}
					Projects And Services
				</h1>
				<SmallBigCards
					SmallCard={() => {
						return (
							<div
								style={{
									width: "100%",
									backgroundColor: "black",
								}}
							>
								<video
									style={{
										opacity: 0.6,
										width: "120%",
										height: "120%",
									}}
									src={cities}
									autoPlay
									loop
									muted
								/>
							</div>
						);
					}}
					BigCard={() => {
						return (
							<div
								style={{
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									alignItems: "end",
									backgroundColor: "white",
									color: "black",
									justifyContent: "space-around",
								}}
							>
								<div
									style={{
										marginRight: "30px",
									}}
								>
									<h1>Smart Cities </h1>
									<p>
										Edge AI  is at the forefront of AI and data analytics,
										<br /> offering a comprehensive range of products and solutions.
									</p>
								</div>
								<Link
									to="/smart-cities"
									style={{
										marginRight: "30px",
										textDecoration: "none",
									}}
									onClick={() => {}}
								>
									Learn More
								</Link>
							</div>
						);
					}}
				/>
			</div>
			<div>
				<SmallBigCards
					right
					SmallCard={() => {
						return (
							<div
								style={{
									width: "100%",
									backgroundColor: "black",
									left: "80%",
								}}
							>
								<video
									style={{
										opacity: 0.6,
										width: "120%",
										height: "120%",
									}}
									src={product}
									autoPlay
									loop
									muted
								/>
							</div>
						);
					}}
					BigCard={() => {
						return (
							<div
								style={{
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									alignItems: "start",
									backgroundColor: "white",
									color: "black",
									justifyContent: "space-around",
								}}
								className="smart-cities-offering"
							>
								<div
									style={{
										marginLeft: "30px",
									}}
								>
									<h1>
										Website and Services
									</h1>
									<p>
										Iris Technologies is a cutting-edge software development
										<br /> and consulting company, specializing in a broad range of services.
										<br />
										Our primary focus is on delivering innovative solutions tailored to our clients
										unique needs
									</p>
								</div>
								<Link
									to="/software-services"
									style={{
										marginLeft: "30px",
										textDecoration: "none",
										marginTop:"-20px"
									}}
									onClick={() => {}}
								>
									Learn More
								</Link>
							</div>
						);
					}}
				/>
			</div>
			<p>
				{" "}
				<br /> <br />
			</p>
			<div id="ai">
				<Articles />
			</div>
			<p>
				{" "}
				<br /> <br />
			</p>

			<div id="cave">
				<Cave />
			</div>
			<p>
				{" "}
				<br /> <br />
			</p>
			<div id="metaverse">
				<h1
					style={{
						width: "100%",
						backgroundColor: "bleu",
						textAlign: "center",
						color: "#646cff",
					}}
				>
					{" "}
					METAVERSE AND AUGMENTED REALITY
				</h1>
				<Metaverse />
			</div>
			
			<p>
				{" "}
				<br /> <br />
			</p>
			<p>
				{" "}
				<br /> <br />
			</p>
			<div id="contact">
				<div
					className="map"
					style={{
						width: "100%",
						height: "100%",
						opacity: "0.6",
					}}
				>
					<img src="./map1.gif" alt="" style={{ width: "100%", height: "450px", objectFit: "cover" }}></img>{" "}
				</div>
				<Contact />
			</div>
			<p>
				{" "}
				<br /> <br />
			</p>
			<p>
				{" "}
				<br /> <br />
			</p>
			
		</>
	);
};

export default Home;
