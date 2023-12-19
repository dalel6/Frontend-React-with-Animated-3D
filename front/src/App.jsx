import Articles from "./component/Articles/articles";
import Navbar from "./component/Navbar/Navbar";
import Smart from "./component/Smart/Smart";
import XRProduct from "./component/XRProducts/XRProduct";

const App = () => {
	return (
		<div>
			<Navbar />

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
		</div>
	);
};

export default App;
