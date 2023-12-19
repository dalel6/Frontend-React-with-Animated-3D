import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import XR_Product from './XR_Product';
import LearnMorePage from './XR_Products/index'; // Create this component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={XR_Product} />
        <Route path="/learn-more" component={LearnMorePage} />
      </Switch>
    </Router>
  );
};

export default App;
