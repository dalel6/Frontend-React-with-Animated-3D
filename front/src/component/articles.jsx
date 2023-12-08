import React from 'react';
import './article.css'
const YourComponent = () => {
  return (
    <div className="container">
      <p className="container-title">Here are the features<br />we’re proud of</p>

      <div className="gradient-cards">
        <div className="card">
          <div className="container-card bg-green-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... SVG content for the green box */}
            </svg>
            <p className="card-title">Zero-cost Possibilities</p>
            <p className="card-description">Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-white-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... SVG content for the white box */}
            </svg>
            <p className="card-title">Multi-Asset Collateral</p>
            <p className="card-description">Deposit a variety of assets on Hubble, raise your collateral ratio, and unlock the liquidity in your wallet.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-yellow-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... SVG content for the yellow box */}
            </svg>
            <p className="card-title">Get Yield on Deposits</p>
            <p className="card-description">While your collateral is deposited, delegate it to earn the highest yield available in the Solana ecosystem.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-blue-box">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... SVG content for the blue box */}
            </svg>
            <p className="card-title">Get up to 11x Leverage</p>
            <p className="card-description">Hubble’s capital-efficient 110% collateral ratio lets users leverage up to 11x on their deposits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
