import "./Navbar.css";

const Navbar = ({ position, bgColor }) => {
	return (
		<nav
			style={{
				position: position ? position : "fixed",
				backgroundColor: bgColor ? bgColor : "black",
			}}
		>
			<ul>
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
				<a href="/#contact" className="button">
					<span>Contact Us </span>{" "}
				</a>
			</ul>
		</nav>
	);
};

export default Navbar;
