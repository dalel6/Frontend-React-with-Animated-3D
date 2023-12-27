import "./footer.css";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-column">
					<h3>COMPANY</h3>
					<a href="#">Services</a>
					<a href="#">Industries</a>
					<a href="#">About Us</a>
					<a href="#">Contact Us</a>
				</div>

				<div className="footer-column">
					<h3>PRODUCTS</h3>
					<a href="/#ai">AI </a>
					<a href="/#metaverse">Metaverse</a>
					<a href="#">Cave</a>
					<a href="#">Software Services</a>
				</div>

				<div className="footer-column hidden-on-small">
					<h3>SMART CITIES</h3>
					<a href="#">AI and Deep Learning</a>
					<a href="#">Embedded Solutions</a>
					<a href="#"> Data Center</a>
				</div>

				<div className="footer-column hidden-on-small">
					<h3>METAVERSE</h3>
					<a href="#">Virtual Reality Showrooms</a>
					<a href="#">Augmented Reality Try-Ons</a>
					<a href="#">Interactive 3D Product Demos</a>
					<a href="#"> Virtual Events and Conferences</a>
				</div>
			</footer>
			<div className="copyright">
				Copyright © 2023 All rights reserved.
				
			</div>
		</>
	);
};
export default Footer;
