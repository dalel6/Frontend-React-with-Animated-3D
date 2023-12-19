import React from 'react';
import ReactDOM from 'react-dom';
import XR_product from './XR_product1'; // Adjust the path as necessary
import Navbar from '../navbar'; // Add this line
const App = () => {
    return (
        <div>
            <Navbar />
            <div>
                <XR_product />
                </div>
           
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
