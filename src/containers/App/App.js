import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><h4>Budget Tracker</h4></li>
          <li><img src={logo} className="App-logo" alt="logo" /></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
