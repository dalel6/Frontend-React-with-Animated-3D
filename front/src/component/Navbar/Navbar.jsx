import { useEffect, useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = ({ position, bgColor }) => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const location = useLocation();

	// whenever the current url changes, close the navbar
	useEffect(() => {
		setIsNavExpanded(false);
	}, [location]);

	return (
		<nav
			style={{
				position: position ? position : "fixed",
				backgroundColor: bgColor ? bgColor : "black",
			}}
		>
			<Link to="/#home" className="logo">
				<img
					src="./logo.png"
					alt=""
					style={{
						width: "300px",
						height: "150px",
					}}
				/>
			</Link>

			<button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
				{/* icon for hamburger menu (can be replaced with an actual icon) */}
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</button>

			<ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
				<li className="active">
					<Link to="/#home">
						<span>Home</span>
					</Link>
				</li>
				<li>
					<Link to="/#ai">
						<span>AI </span>
					</Link>
				</li>
				<li>
					<Link to="/smart-cities">
						<span>Smart Cities</span>
					</Link>
				</li>
				<li>
					<Link to="/software-services">
						<span>Software Services</span>
					</Link>
				</li>
				<li>
					<Link to="/#cave">
						<span>Cave </span>
					</Link>
				</li>
				<li>
					<Link to="/#metaverse">
						<span>Metaverse</span>
					</Link>
				</li>
				<li>
					<Link to="/#contact">
						<span>Contact Us </span>{" "}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
