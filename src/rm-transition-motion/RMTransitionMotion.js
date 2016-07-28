import React, { Component } from 'react';
import { spring, TransitionMotion } from 'react-motion';
import './RMTransitionMotion.css';

class RMTransitionMotion extends Component {

  constructor(){
    super();

    this.state = {
      blocks: [{id:0}, {id:1}, {id:2}],
      id: 3,
      display: 'all'
    }; 

    this.handleClick = this.handleClick.bind(this);
    this.handleBlockRemove = this.handleBlockRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleHideAll = this.handleHideAll.bind(this);
  }

  handleClick() {
    console.debug('click');
    this.setState({
      blocks: [...this.state.blocks, {id: this.state.id}],
      id: this.state.id + 1
    });
  }

  handleBlockRemove(blockId) {
    const blockIndex  = this.state.blocks.findIndex(block => block.id === blockId);
    
    this.setState({
      blocks: [
        ...this.state.blocks.slice(0, blockIndex),
        ...this.state.blocks.slice(blockIndex + 1, this.state.blocks.length)
      ]
    })
  }

  handleToggle() {
    if(this.state.display === 'all') {
      this.setState ({
        display: 'odds'
      });
    } else {
      this.setState({
        display: 'all'
      })
    }
  }

  handleHideAll() {
    this.setState({
      display: 'none'
    });
  }

  willLeave() {
    return {
      width: spring(0)
    };
  }

  willEnter() {
    return {
      width: {val: 120}
    };
  }

  render() {
    let blocksState 

    if(this.state.display === 'none') {
      blocksState = [];
    } else {
      blocksState = this.state.display === 'all'
      ?  this.state.blocks
      :  this.state.blocks.filter((block) => block.id % 2 === 0);
    }
    
    return (
      <div className="rm-transition-motion">
      
        <div>
          <button
            onClick={this.handleToggle}
          >
            Toggle blocks view
          </button>
        
          <button
            onClick={this.handleClick}
          >
            Click to add new block
          </button>
          <button
            onClick={this.handleHideAll}
          >
            Click to hide all
          </button>
        </div>  
          <TransitionMotion
            willLeave={this.willLeave}
            willEnter={this.willEnter}
            styles = { 
              blocksState.map((block) => {
                return {
                  key: `key-${block.id}`,
                  data: block.id,
                  style: {width: 120, height: 120}
                }
              }) 
            }
          >
          {
            interpolatedStyles => (
              <div>
                {interpolatedStyles.map(config => {
                  console.debug(config);
                  return <div className="block" 
                    key={config.key} 
                    onClick = { () => this.handleBlockRemove(config.data)}
                    style={{...config.style, border: '1px solid red'}} />
                })}
              </div>)
          }
        
          </TransitionMotion>
        <div className="clear-fix"></div>
      </div>
    );
  }
}

export default RMTransitionMotion;