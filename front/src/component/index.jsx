// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import SplineComponent from './cube'; // Adjust the path as necessary
import Navbar from './navbar'; // Add this line
import YourComponent from './articles';

const App = () => {
    return (
        <div>
            <Navbar />
            <div >
                <SplineComponent />
            </div>
            <div>
                <YourComponent />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
