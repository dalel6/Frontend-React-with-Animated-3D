import SecondTitle from "../SecondTitle/SecondTitle";
import "./XRproduct.css"; // Import your CSS file for styling

const XRProduct = () => {
	return (
		<div id="intelligent-store" className="intelligent-store">
			<p className="container-title">
				<SecondTitle />
			</p>
			<div className="products">
				<div className="product1">
					<img src="./s.png" alt="" />
					<div className="text">
						<h1>1. Custom Software Development</h1>
						<p>
							We provide bespoke software development services,
							<br />
							<br />
							creating tailored solutions that align with our clients business goals.
							<br />
							<br /> Our team excels in developing applications that are both functional and aesthetically
							pleasing,
							<br />
							<br /> ensuring a seamless user experience.
						</p>
					</div>
				</div>
				<div className="product2">
					<img src="./s.png" alt="" />
					<div className="text">
						<h1>2. Mobile App Development</h1>
						<p>
							Iris Technologies excels in creating intuitive,
							<br />
							<br /> user-friendly mobile applications for both Android and iOS platforms.
							<br />
							<br /> We focus on creating apps that are not only visually appealing
							<br />
							<br /> but also robust and scalable to meet the evolving needs of businesses and consumers.
						</p>
					</div>
				</div>
				<div className="product3">
					<img src="./s.png" alt="" />
					<div className="text">
						<h1>1. Custom Software Development</h1>
						<p>
							We provide bespoke software development services, creating tailored solutions that align
							with our clients business goals.
							<br />
							<br /> Our team excels in developing applications that are both functional and aesthetically
							pleasing,
							<br />
							<br /> ensuring a seamless user experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default XRProduct;
