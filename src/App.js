import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlainCss from './plain-css/PlainCss';
import CSSTransition from './css-transition/CSSTransition';
import RMSpring from './rm-spring/RMSpring';
import RMSpring2 from './rm-spring-2/RMSpring2';
import RMTransitionMotion from './rm-transition-motion/RMTransitionMotion';
import ReactMotionUIPack from './react-motion-UI-pack/ReactMotionUIPack';

class App extends Component {
  constructor(...args){
    super(...args);

    this.state = {
      visibility: {}
    }
  }

  toggleVisibility(param) {
    const visibility = this.state.visibility;
    visibility[param] = !this.state.visibility[param];
    this.setState({
      visibility: visibility
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="switches-container">
        {
          ['CSS', 'ReactCSSTransitionGroup', 'ReactMotionSpring', 'ReactMotionTransitionMotion', 'ReactMotionUIPack'].map(presentationPart => {
            return (
              <div
                key={presentationPart}
                className="checkbox"
              >
                <input
                  id={presentationPart}
                  type="checkbox"
                  checked={this.state.visibility[presentationPart]}
                  onChange={()=> this.toggleVisibility(presentationPart)}
                />
                <label htmlFor={presentationPart}>
                  {presentationPart}
                </label>
              </div>
            )
          })
        }
        </div>

        <div className="content-container">
        {
          this.state.visibility['CSS']
          ? <div>
              <h4> CSS </h4>
              <PlainCss />
            </div>
          : null
        }
        {
          this.state.visibility['ReactCSSTransitionGroup']
          ? <div>
              <h4> ReactCSSTransitionGroup </h4>
          <CSSTransition />
            </div>
          : null
        }
        {
          this.state.visibility['ReactMotionSpring']
          ? <div className="react-motion-container">
              <RMSpring /> 
              <RMSpring2 />
            </div>
          : null
        }
        {
          this.state.visibility['ReactMotionTransitionMotion']
          ? <RMTransitionMotion />
          : null
        }

        { this.state.visibility['ReactMotionUIPack']
          ? <ReactMotionUIPack/>  : null
        }
        </div>

      </div>
    );
  }
}

export default App;
