import React from 'react';
import ReactDOM from 'react-dom';
import IInterface from './home'; // Adjust the path as necessary
import Navbar from './navbar'; // Add this line
import Yourimage from './metaverse';
import Articles from './articles';
import Smart from './smart_cities';
import SplitScreen from './contact';
import XR_Product from './XR_Product'   ;
const App = () => {
    return (
        <div>
            <Navbar />
            <div>
                <IInterface />
            </div>
            
            <div>
            <Smart />
                
            </div>
            <p> <br /> <br /></p>
            <div>
            <Articles />
                
            </div>
            <div>
                <XR_Product />
            </div>
            <div>
               <SplitScreen /> 
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
