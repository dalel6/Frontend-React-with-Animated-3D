import React from 'react';
import './XRproduct.css'; // Import your CSS file for styling
import Titre2 from './second_title';
const XR_product = () => {
    return (
        <div id="intelligent-store" className="intelligent-store">
            <p className="container-title">
                <Titre2 />
         </p>
            
              <img src="./s.png" alt='' /> 
              <div className='text'> 
                <h1>1. Custom Software Development</h1>
                <p>We provide bespoke software development services, creating tailored solutions that align with our clients' business goals.
                    <br/>
                    <br /> Our team excels in developing applications that are both functional and aesthetically pleasing, 
                    <br/>

                    <br /> ensuring a seamless user experience..</p>
            </div>
        </div>
    );
};

export default XR_product;
