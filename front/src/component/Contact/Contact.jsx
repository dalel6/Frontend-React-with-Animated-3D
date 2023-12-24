import "./contact.css";

const Contact = () => {
	return (
		<div className="contact-container" style={{ backgroundColor: "black", color: "white" }}>
			<div className="contact-item contact-logo">
				<img src="./logo.png" alt="Logo" />
			</div>
			<div className="contact-item">
				<img src="./telephone.png" alt="Phone" />
				<span>+97471201352</span>
			</div>
			<div className="contact-item">
				<img src="./email.png" alt="Email" />
				<span>ceo@iristechnologies.info</span>
			</div>
			<div className="contact-item">
				<img src="./local.png" alt="Location" />
				<span>
					AI Luqta ST ,Ar-Rayyan,
					<br />
					Qatar
				</span>
			</div>
		</div>
	);
};

export default Contact;
