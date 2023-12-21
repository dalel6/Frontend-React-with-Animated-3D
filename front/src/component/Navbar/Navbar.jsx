// Navbar.jsx
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<a href="" className="logo">
					<img className="h-16" src="./logo.png" alt=""  style={{width:"800%"}}/>
					
				</a>

				<li className="active">
					<a href="">
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="">
						<span>AI Product</span>
					</a>
				</li>
				<li>
					<a href="">
						<span>Smart Cities</span>
					</a>
				</li>
				<li>
					<a href="">
						<span>Cave Offering</span>
					</a>
				</li>
				<li>
					<a href="">
						<span>XR Product</span>
					</a>
				</li>
				<button className="button">Contact Us</button>
			</ul>
		</nav>
	);
};

export default Navbar;
