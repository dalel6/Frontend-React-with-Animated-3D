import Navbar from "./component/Navbar/Navbar";
import XRProduct from "./component/XRProducts/XRProduct";
import Home from "./component/Home/Home";
import Articles from "./component/Articles/articles";
import SmallBigCards from "./component/SmallBigCards/SmallBigCards";
import cities from "./assets/cities.mp4";
import "./App.css";

const App = () => {
	return (
		<div
			style={{
				overflow: "hidden",
			}}
		>
			<Navbar />

			<div>
				<Home />
			</div>
			<div>
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
										width: "120%",
										height: "120%",
										opacity: "0.6",
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
								className="smart-cities-offering"
							>
								<div>
									<h1>Smart cities offering</h1>
									<p>
										Edge AI by PNY Technologies is at the forefront of AI and data analytics,
										<br /> offering a comprehensive range of products and solutions.
									</p>
								</div>
								<button onClick={() => {}}>Learn More</button>
							</div>
						);
					}}
				/>
			</div>
			<p>
				{" "}
				<br /> <br />
			</p>
			<div>
				<Articles />
			</div>
			<div>
				<XRProduct />
			</div>
		</div>
	);
};

export default App;
