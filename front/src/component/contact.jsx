import React from 'react';
import './contact.css';


const contactInfo = {
    address: '25, Lorem Lis Street, Orange California, US',
    phone: '800 123 3456',
    email: 'info@htmlstream.com',
    tollFree: '800 123 3456'
};

const SplitScreen = () => {
    return (
        <div className="split-container">
            <div className="split left">
                <h1>GET IN TOUCH</h1>
                <div className="underline"></div>
        <p><img src='./local.png' alt="Address" height="3%" width="3%" /> <strong>Address:</strong> {contactInfo.address}</p>
        <p><img src='./telephone.png' alt="Phone" height="3%" width="3%"/> <strong>Phone Number:</strong> {contactInfo.phone}</p>
        <p><img src='./email.png' alt="Email" height="3%" width="3%"/> <strong>Email:</strong> {contactInfo.email}</p>
        <p><img src='./telephone.png' alt="Toll Free" height="3%" width="3%" /> <strong>Toll Free:</strong> {contactInfo.tollFree}</p>
    </div>
            <div className="split right" style={{ backgroundImage: `url('./map.png')` }}>
                {/* Additional content for the right side here */}
            </div>
        </div>
    );
};

export default SplitScreen;
