// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import SplineComponent from './cube'; // Adjust the path as necessary

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <SplineComponent />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
