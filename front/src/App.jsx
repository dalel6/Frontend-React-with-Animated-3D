import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import SmartCities from "./pages/SmartCities/Smart";

const App = () => {
	return (
		<div
			style={{
				overflow: "hidden",
			}}
		>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/smart-cities" element={<SmartCities />} />
			</Routes>
		</div>
	);
};

export default App;
