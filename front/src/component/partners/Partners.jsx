import React from 'react';
import './partners.css';
const Partners = () => {
  return (
    <div className="section">
      <div className="container">
        
        <strong>
          <div className="row">
            <div >
              <div className="square-holder">
                <img alt="" src="poly.jpg" />
              </div>
            </div>
            <div >
              <div className="square-holder">
                <img alt="" src="studios.jpg" />
              </div>
            </div>
            <div >
              <div className="square-holder">
                <img alt="" src="dezzex.jpg" style={{width:'90%'}} />
              </div>
            </div>
            
          </div>
        </strong>
      </div>
    </div>
  );
};

export default Partners;
