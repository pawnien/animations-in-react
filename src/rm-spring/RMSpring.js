import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class RMSpring extends Component {

  render() {

    return (
      <Motion defaultStyle={{x: 0}} style={{x: spring(360)}}>
        {value => {
          let style = {
            width: value.x,
            height: value.x, 
            position: 'absolute',
            top: value.x*0.25,
            left: value.x*0.25,
            border: '1px solid red',
            transform: `rotate(${value.x}deg)`
          };
          
          return <div style={style}>{value.x}</div>
        }}
      </Motion>
    );
  }
}

export default RMSpring;
