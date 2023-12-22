import Typical from "react-typical";

const steps = ["Iris Technologies", 1000, " Smart Cities Offering  ", 1000];

const FourthTitle = () => {
	return (
		<div>
			<Typical wrapper="span" steps={steps} loop={1} className={"caca"}  />
		</div>
	);
};

export default FourthTitle;