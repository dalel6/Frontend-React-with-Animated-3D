import React from 'react';
import product from '../assets/product.mp4';
import './XR_Product.css'
import Navbar from './navbar';
const XR_Product = () => {
    const handleClick = () => {
        // Handle the click event for the button
        alert('Button clicked!');
      };
  return (
    <div className='smart'>
        
        <div className="overlay"></div>
        
        <video src={product} autoPlay loop muted />
        <div className='nav'>
        <Navbar  />
        </div>
        <div className="smartcities">
        
            <h1>Smart cities offering</h1>
            <p>Edge AI by PNY Technologies is at the forefront of AI and data analytics,
                <br /> offering a comprehensive range of products and solutions.</p>
            <button onClick={handleClick}>Learn More</button>
               
        </div>
    </div>
  )
}

export default XR_Product;