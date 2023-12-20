import Typical from "react-typical";

const steps = ["Iris Technologies", 1000, "CAVE Offering ", 1000];

const ThirdTitle = () => {
	return (
		<div>
			<Typical wrapper="span" steps={steps} loop={1} className={"caca"} style={{ color: "white" }} />
		</div>
	);
};

export default ThirdTitle;
