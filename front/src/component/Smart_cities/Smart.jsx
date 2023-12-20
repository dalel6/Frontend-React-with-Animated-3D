

import React from 'react';
import cities from '../../assets/product.mp4';
import './smart.css'


const Smart = () => {
    const handleClick = () => {
        // Handle the click event for the button
        alert('Button clicked!');
      };
  return (
    <div className='smart'>
       
        <div className="overlay"></div>
       
        <video src={cities} autoPlay loop muted />
        <div className='nav'>
       
        </div>
        <div className="smartcities">
       
            <h1>Iris Technologies -
                <br/> Website and Services Description</h1>
            <p>Iris Technologies is a cutting-edge software development and consulting company, specializing in a broad range of services.
                <br /> Our primary focus is on delivering innovative solutions tailored to our clients' unique needs.
             </p>
            <button onClick={handleClick}>Learn More</button>
               
        </div>
    </div>
  )
}


export default Smart;