import React, { Component } from 'react';
import { spring, TransitionMotion } from 'react-motion';
import './ReactMotionUIPack.css';
import Transition from 'react-motion-ui-pack'

class ReactMotionUIPack extends Component {

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

  render() {
    const blocksState = this.state.display === 'all'
      ?  this.state.blocks
      :  this.state.blocks.filter((block) => block.id % 2 === 0);

    let availableBlocks; 

    if(this.state.display === 'none') {
      availableBlocks = [];
    } else {
      availableBlocks = blocksState;
    }
    const blocks = availableBlocks.map((block) => {

      return(
        <div 
          key={block.id}
          className ='block'
          onClick={() => this.handleBlockRemove(block.id)}
        >
          {block.id}
        </div>
      )
    })

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
          <Transition
            component="div"
            enter={{
              width: spring(120),
              opacity: 1,
            }}
            leave={{
              width: 0,
              opacity: 0,
            }}
          >  
            {blocks}
          </Transition>
        <div className="clear-fix"></div>
      </div>
    );
  }
}

export default ReactMotionUIPack;