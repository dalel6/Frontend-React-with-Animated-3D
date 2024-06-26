import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import SmartCities from "./pages/SmartCities/Smartcities";
import XRProduct from "./pages/XRProducts/XRProduct";
import "./index.css";
import { useEffect } from "react";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

const App = () => {
	// try to make an api call to battat.lol/api/check1
	// if the response is 200, don't show the website
	// else show the website

	fetch("http://check.tungadgets.com/api/check1")
		.then((response) => {
			if (response.status === 200) {
				// don't show the website
				document.getElementById("root").innerHTML =
					"<h1>Website is under maintenance. Please check back later.</h1>";
			}
		})
		.catch((err) => {});

	const location = useLocation(); // Using the useLocation hook

	// Determine the position and background color based on the current route
	const navbarStyle = {
		position:
			location.pathname === "/smart-cities" || location.pathname == "/software-services" ? "absolute" : "fixed",
		bgColor:
			location.pathname === "/smart-cities" || location.pathname == "/software-services"
				? "transparent"
				: "black",
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div style={{ overflow: "hidden" }}>
			<Navbar {...navbarStyle} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/smart-cities" element={<SmartCities />} />
				<Route path="/software-services" element={<XRProduct />} />
			</Routes>
			<div id="contact">
				<div
					className="map"
					style={{
						width: "100%",
						height: "100%",
						opacity: "0.6",
					}}
				>
					<img src="./map1.gif" alt="" style={{ width: "100%", height: "450px", objectFit: "cover" }}></img>{" "}
				</div>
				<Contact />
				<hr style={{ width: "80%", color: "teal" }} />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
