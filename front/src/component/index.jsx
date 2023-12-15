import React from 'react';
import ReactDOM from 'react-dom';
import IInterface from './home'; // Adjust the path as necessary
import Navbar from './navbar'; // Add this line
import Yourimage from './metaverse';
import Articles from './articles';
import Smart from './smart_cities';
import SplitScreen from './contact';
import XR_product from './XR_prodect'   ;
const App = () => {
    return (
        <div>
            <Navbar />
            <div>
                <IInterface />
            </div>
            
            <div>
                <Articles />
                
            </div>
            <p> <br /> <br /></p>
            <div>
                <Smart />
            </div>
            <div>
                <XR_product />
            </div>
            <div>
               <SplitScreen /> 
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
