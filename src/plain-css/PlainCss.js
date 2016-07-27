import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './PlainCss.css';

class PlainCss extends Component {

  constructor(){
    super();

    this.state = {
      blocks: [{id:0},{id:1},{id:2}],
      id: 3,
      display: 'all'
    }; 

    this.handleClick = this.handleClick.bind(this);
    this.handleBlockRemove = this.handleBlockRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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

  render() {
    console.debug(this.state); 

    const blocksState = this.state.display === 'all'
      ?  this.state.blocks
      :  this.state.blocks.filter((block) => block.id % 2 === 0);

    const blocks = blocksState.map((block) => {

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
      <div className="plain-css">
      
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
        </div>
        <div className="blocks">
          {blocks} 
        </div>  
        <div className="clear-fix"></div>
      </div>
    );
  }
}

export default PlainCss;
