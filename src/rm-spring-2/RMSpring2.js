import React, { Component } from 'react';
import { Motion, spring, presets} from 'react-motion';
import './RMSpring2.css';

class RMSpring extends Component {

  render() {
    console.debug('Spring', spring);
    return (
      <Motion defaultStyle={{y: 500, z: 4 }} style={{y: spring(100), z: spring(1) , config: presets.wobbly}}>
        {value => {
          let style = {
            transform: `translate(100px, ${value.y}px) scale(${value.z})`
          }

          return <div style={style} className="spring-block"></div>
        }}
      </Motion>
    );
  }
}

export default RMSpring;
