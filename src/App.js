import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Music from './Music';
import Live from './Live';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/live' component={Live}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
