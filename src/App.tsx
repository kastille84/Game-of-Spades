import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './containers/Welcome';
import Gameboard from './containers/Gameboard';

import './App.scss';

class App extends React.Component{
  render() {

    return (
      <main className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/gameboard" component={Gameboard} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
