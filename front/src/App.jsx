import Articles from "./component/Articles/Articles";
import Navbar from "./component/Navbar/Navbar";
import Smart from "./component/Smart/Smart";
import XRProduct from "./component/XRProducts/XRProduct";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";


const App = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Home />
			</div>

			<div>
				<Smart />
			</div>
			<p>
				{" "}
				<br /> <br />
			</p>
			<div>
				<Articles />
			</div>
			<div>
				<XRProduct />
			</div>
		
			{/* <div>
				<SplitScreen />
			</div> */}
			<Contact />
		</div>
	);
};

export default App;
