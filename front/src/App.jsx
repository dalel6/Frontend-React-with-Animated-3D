import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";

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
				<Route path="/test" element={<div>test</div>} />
			</Routes>
		</div>
	);
};

export default App;
