import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ position, bgColor }) => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
		<nav
			style={{
				position: position ? position : "fixed",
				backgroundColor: bgColor ? bgColor : "black",
			}}
		>
			<a href="/#home" className="logo">
				<img
					src="./logo.png"
					alt=""
					style={{
						width: "300px",
						height: "150px",
					}}
				/>
			</a>

			<button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
				{/* icon for hamburger menu (can be replaced with an actual icon) */}
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</button>

			<ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
				<li className="active">
					<a href="/#home">
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="/#ai">
						<span>AI </span>
					</a>
				</li>
				<li>
					<a href="/smart-cities">
						<span>Smart Cities</span>
					</a>
				</li>
				<li>
					<a href="/software-services">
						<span>Software Services</span>
					</a>
				</li>
				<li>
					<a href="/#cave">
						<span>Cave </span>
					</a>
				</li>
				<li>
					<a href="/#metaverse">
						<span>Metaverse</span>
					</a>
				</li>
				<li>
					<a href="/#contact">
						<span>Contact Us </span>{" "}
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
