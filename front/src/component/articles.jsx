import React from 'react';
import './article.css' ;
import Titre1 from './first-title';

const Articles = () => {

  return (
    <div className="container">
         <p className="container-title">
                <Titre1 />
         </p>
      
      <div className="gradient-cards">
      <div class="card">
  <div class="container-card bg-green-box">
  <div class="image-container">
      <img src="./Smart_claim.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>

    <p class="card-title">Smart Claim</p>
    <p class="card-description">An AI solution for automating insurance claims, enhancing efficiency and accuracy. </p>
  </div>
</div>

        
        <div className="card">
          <div className="container-card bg-white-box">
          <div class="image-container">
      <img src="./surveyor.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>
          
            <p className="card-title">Smart Surveyor</p>
            <p className="card-description">Uses AI for precise surveying in various industries, ensuring data accuracy.</p>
          </div>
        </div>
       

        <div className="card">
          <div className="container-card bg-yellow-box">
          <div class="image-container">
      <img src="./garage.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>
            <p className="card-title">Smart Garage</p>
            <p className="card-description">AI-powered tool for automotive maintenance, offering smart diagnostics and service management</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-blue-box">
          <div class="image-container">
      <img src="./car.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>
            <p className="card-title">Car Assessor</p>
            <p className="card-description">An AI application for accurate car assessment, aiding in valuation and condition reporting.</p>
          </div>
        </div>
        <div className="card">
          <div className="container-card bg-green-box">
            
          <div class="image-container">
      <img src="./drone.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>
            <p className="card-title">Drone Analysis</p>
            <p className="card-description">Leverages AI for analyzing drone-captured data, applicable in surveillance, mapping, and more.</p>
          </div>
        </div>
        <div className="card">
          <div className="container-card bg-white-box">
          <div class="image-container">
      <img src="./satelite.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>
            <p className="card-title">Satellite Imaging</p>
            <p className="card-description">AI-based analysis of satellite images for detailed earth observation and insights.</p>
          </div>
        </div>
        <div className="card">
          <div className="container-card bg-yellow-box">
          <div class="image-container">
      <img src="./AIbot.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>
            <p className="card-title">AI Chatbot</p>
            <p className="card-description"> An intelligent chatbot solution powered by AI, enhancing customer interaction and support.</p>
          </div>
        </div>
        <div className="card">
          <div className="container-card bg-blue-box">
          <div class="image-container">
      <img src="./digital.png" alt="Smart Claim" height="91px" width="100%"/>
    </div>
            <p className="card-title">Digital Onboarding</p>
            <p className="card-description">Streamlines the digital onboarding process using AI, improving user experience and efficiency.</p>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Articles;
