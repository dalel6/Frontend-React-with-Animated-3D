import "./SmallBigCards.css";

function SmallBigCards({ SmallCard, BigCard }) {
	return (
		<div className="smallBigCardContainer">
			<div className="smallCard smallBigCard">
				<SmallCard />
			</div>
			<div className="bigCard smallBigCard">
				<BigCard />
			</div>
		</div>
	);
}

export default SmallBigCards;
