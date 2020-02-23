import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './containers/welcome';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Welcome} />

      </Switch>
    </Router>
  );
}

export default App;
