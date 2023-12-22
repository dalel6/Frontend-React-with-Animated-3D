import Typical from "react-typical";

const steps = ["Iris Technologies", 1000, " Website and Services  ", 1000];

const SecondTitle = () => {
	return (
		<div>
			<Typical wrapper="span" steps={steps} loop={1} className={"caca"}  />
		</div>
	);
};

export default SecondTitle;
