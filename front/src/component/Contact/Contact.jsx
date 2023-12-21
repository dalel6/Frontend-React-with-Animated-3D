import "./contact.css";

const contactInfo = {
	address: "25, Lorem Lis Street, Orange California, US",
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
			<span>+971 58 595 2340</span>
		</div>
		<div className="contact-item">
			<img src="./email.png" alt="Email" />
			<span>sales@dezzex.com</span>
		</div>
		<div className="contact-item address">
			<img src="./local.png" alt="Location" />
			<span>No: HD 25A, Floor 1, Building: In5 Tech, 
				<br/>Dubai, United Arab Emirates</span>
		</div>
	</div>
		
	
	);
};

export default SplitScreen;
