import React, { Component } from 'react';
import './Home.css';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';
import About from '../about/About';
import CV from '../cv/CV';

export default class Home extends Component {
  render() {
	  var hello = []
      /*
      for (let i = 0; i < 100; i++) {
          hello.push(<div style={{color:"red"}}>hei</div>)
      }
      */

    return (
        <div className="home">
            <header className="home__header">
                <Nav />
                <img src="tmp_header.png"></img>
            </header>
            <div className="content">
                <About />
                <CV />
            </div>
			<Footer />
		</div>
    );
  }
}