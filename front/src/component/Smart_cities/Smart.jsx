

import React from 'react';
import cities from '../../assets/cities.mp4';
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
                <br/> Smart cities offering</h1>
            <p>Edge AI by PNY Technologies is at the forefront of AI and data analytics, 
                <br/>offering a comprehensive range of products and solutions.
               
             </p>
            <button onClick={handleClick}>Learn More</button>
               
        </div>
    </div>
  )
}


export default Smart;