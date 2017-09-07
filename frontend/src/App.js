import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'
import Home from './components/home/Home'

class App extends Component {
  render() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
        </Router>
    );
  }
}

export default App;
