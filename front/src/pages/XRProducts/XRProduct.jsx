import SecondTitle from "../../component/SecondTitle/SecondTitle";
import "./XRproduct.css"; // Import your CSS file for styling
import Home_section from "./Home_section";

const XRProduct = () => {
	return (
		<div id="intelligent-store" className="intelligent-store">
			<div className="nav" style={{backgroundColor:'white'}}></div>
		
			<Home_section/>
			<br/>
			
			<br/>
			<div className="products">
				<div className="product1">
					<img src="./1.jpg" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1  >1. Custom Software Development</h1>
						 <p  >

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
					
					<div className="text" style={{ position: 'relative', left: '10%'}} >
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
					<img src="./mobileApp.jpg" alt="" />
				</div>
				<div className="product3">
					<img src="./website.jpg" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}}>
						<h1>3. Web Design and Development</h1>
						<p> Our web design and development services are focused <br />
							<br /> on creating visually stunning and interactive websites.<br />
							<br /> We ensure that our websites are not only aesthetically pleasing <br/>
							<br />but also highly functional, responsive, and user-friendly, catering to a global audience.
							
						</p>
					</div>

				</div>
				<div className="product2">
					
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1>4. Digital Marketing Services</h1>
						<p>
						We offer comprehensive digital marketing services, including SEO
							<br />
							<br /> content marketing, social media management, and PPC campaigns.
							<br />
							<br /> Our strategic approach ensures that our clients' brands
							<br />
							<br /> gain maximum visibility and engagement online.

						</p>
					</div>
					<img src="./marketing.jpg" alt="" />
				</div>
			
			<div className="product1">
					<img src="./IT.png" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1  >5. IT Consulting</h1>
						 <p  >

						 Our IT consulting services are designed to assist businesses
							<br />
							<br />
							in navigating the complex digital landscape.
							<br />
							<br /> We offer expert advice on a range of topics, including system integration,
							<br />
							<br />  cloud computing, and cybersecurity.

						</p>
					</div>
				</div>
				<div className="product2">
					
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1>6. E-commerce Solutions</h1>
						<p>
						We specialize in developing customized e-commerce platforms
							<br />
							<br /> that offer a seamless shopping experience.
							<br />
							<br /> Our solutions are designed to be secure, scalable, and user-friendly,
							<br />
							<br />driving sales and enhancing customer engagement.
</p>
					</div>
					<img src="./ecommerce.jpg" alt="" />
				</div>
				<div className="product3">
					<img src="./design.jpg" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}}>
						<h1>7. Graphic Design</h1>
						<p>
						Our graphic design services encompass everything from logo design to full brand identity development.
							<br />
							<br />We create visually compelling designs that resonate with target audiences 
							<br />
							<br /> and reflect our clients' brand values.


						</p>
					</div>

				</div>
				<div className="product2">
					
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1>8. Game Development</h1>
						<p>
						At Iris Technologies, we also have a dedicated team for game development.
							<br />
							<br /> We create immersive and engaging games for various platforms, 
							<br />
							<br /> focusing on innovative gameplay, stunning graphics,
							<br />
							<br /> and captivating storylines.


						</p>
					</div>
					<img src="./game.jpg" alt="" />
				</div>
			</div>
		</div>
		
	);
};

export default XRProduct;
