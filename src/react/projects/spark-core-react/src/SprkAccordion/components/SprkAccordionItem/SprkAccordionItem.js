import React, { Component } from 'react';

class SprkAccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: 'cats',
    }
  }

  render() {
    return (<div>{this.state.cats}</div>);
  }
}

export default SprkAccordionItem;