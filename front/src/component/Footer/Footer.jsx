import "./footer.css";

import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-column">
					<h3>COMPANY</h3>
					<a>Services</a>
					<a>Industries</a>
					<a>About Us</a>
					<a>Contact Us</a>
				</div>

				<div className="footer-column">
                    <h3>PRODUCTS</h3>
                    <Link to="/#ai">AI </Link>
                    <Link to="/#metaverse">Metaverse</Link>
					<a>Cave</a>
					<a>Software Services</a>
				</div>

				<div className="footer-column hidden-on-small">
					<h3>SMART CITIES</h3>
					<a>AI and Deep Learning</a>
					<a>Embedded Solutions</a>
					<a>Data Center</a>
				</div>

				<div className="footer-column hidden-on-small">
					<h3>METAVERSE</h3>
					<a>Virtual Reality Showrooms</a>
					<a>Augmented Reality Try-Ons</a>
					<a>Interactive 3D Product Demos</a>
					<a>Virtual Events and Conferences</a>
				</div>
			</footer>
			<div className="copyright">
				Copyright © 2023 All rights reserved.
			</div>
		</>
	);
};
export default Footer;
