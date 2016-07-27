import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CSSTransition from './css-transition/CSSTransition';
import RMSpring from './rm-spring/RMSpring';
import RMSpring2 from './rm-spring-2/RMSpring2';
import RMTransitionMotion from './rm-transition-motion/RMTransitionMotion';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CSSTransition />
        <div className="react-motion-container">
          {/*<RMSpring /> 
          <RMSpring2 />*/}
          <RMTransitionMotion />
        </div>

      </div>
    );
  }
}

export default App;