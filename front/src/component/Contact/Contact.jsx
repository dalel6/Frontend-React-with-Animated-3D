import "./contact.css";

const contactInfo = {
	
	phone: "+97471201352",
	email: "ceo@iristechnologies.info",
	tollFree: "+97471201352",
};

const SplitScreen = () => {
	return (
		<div className="contact-container">
		<div className="contact-item">
			<img src="./logo.png" alt="Logo" style={{width:"40%"}} />
			
		</div>
		<div className="contact-item">
			<img src="./telephone.png" alt="Phone" />
			<span>+97471201352</span>
		</div>
		<div className="contact-item">
			<img src="./email.png" alt="Email" />
			<span>ceo@iristechnologies.info</span>
		</div>
		<div className="contact-item address">
			<img src="./local.png" alt="Location" />
			<span>AI Luqta ST ,Ar-Rayyan,
				<br/>Qatar</span>
		</div>
	</div>
		
	
	);
};

export default SplitScreen;
