import AiInterface from "../../component/AiInterface/AiInterface";
import SmallBigCards from "../../component/SmallBigCards/SmallBigCards";
import cities from "../../assets/cities.mp4";
import product from "../../assets/product.mp4";
import Articles from "../../component/Articles/articles";
import Cave from "../../component/Cave/Cave";
import Metaverse from "../../component/Metaverse/Metaverse";
import Contact from "../../component/Contact/Contact";
import XRProduct from "../../component/XRProducts/XRProduct";
import Smartcities from "../../component/Smart_cities/Smartcities";

const Home = () => {
	return (
		<>
			<div>
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
									<h1>Smart cities offering</h1>
									<p>
										Edge AI by PNY Technologies is at the forefront of AI and data analytics,
										<br /> offering a comprehensive range of products and solutions.
									</p>
								</div>
								<button
									style={{
										marginRight: "30px",
									}}
									onClick={() => {}}
								>
									Learn More
								</button>
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
										Iris Technologies -
										<br />
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
								<button
									style={{
										marginLeft: "30px",
									}}
									onClick={() => {}}
								>
									Learn More
								</button>
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
			<p>
				{" "}
				<br /> <br />
			</p>

			<div>
				<Cave />
			</div>
			<p>
				{" "}
				<br /> <br />
			</p>
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
			<div>
				<div className="map" style={{      
    width: "100%",
    height: "100%",
    opacity: "0.6",}}>
		<img src = './map.jpg' alt=""  style = {{width: "100%",
    height: "250px",
    objectFit: "cover",}}></img>	</div>
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
			<div>
				<XRProduct />
			</div>
			<div>
				<Smartcities />
			</div>
		</>
	);
};

export default Home;
