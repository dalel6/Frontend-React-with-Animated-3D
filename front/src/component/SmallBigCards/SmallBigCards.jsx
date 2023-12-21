import "./SmallBigCards.css";

const SmallBigCards = ({ SmallCard, BigCard, right }) => {
	return (
		<div className="smallBigCardContainer">
			<div className={`smallCard smallBigCard ${right ? "right" : "left"}`}>
				<SmallCard />
			</div>
			<div className="bigCard smallBigCard">
				<BigCard />
			</div>
		</div>
	);
};

export default SmallBigCards;
