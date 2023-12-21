import Typical from "react-typical";

const steps = ["Iris Technologies", 1000, "AI Product Descriptions ", 1000];

const FirstTitle = () => {
	return (
		<div>
			<Typical wrapper="span" steps={steps} loop={1} className={"caca"} style={{ color: "#646cff"}} />
		</div>
	);
};

export default FirstTitle;
