import React, { Component } from 'react';
import './App.css';
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'
import Home from './components/home/Home'
import CV from './components/cv/CV'
import BusinessCV from './components/businessCV/CV'
import AStar from './components/aStar/AStar'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/cv" component={CV} />
                <Route path="/businessCV" component={BusinessCV} />
                <Route path="/astar" component={AStar} />
            </div>
        </Router>
    );
  }
}

export default App;
