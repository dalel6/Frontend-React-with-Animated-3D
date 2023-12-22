import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import SmartCities from "./pages/SmartCities/Smartcities";
import XRProduct from "./pages/XRProducts/XRProduct";
import "./index.css"
const App = () => {
	return (
		<div
			style={{
				overflow: "hidden",
			}}
		>
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/smart-cities" element={<SmartCities />} />
				<Route path="/software-services" element={<XRProduct />} />

			</Routes>
		</div>
	);
};

export default App;
