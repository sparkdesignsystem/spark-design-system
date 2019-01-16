import React from 'react';
import classnames from 'classnames';

class SprkButton extends React.Component {
  constructor(){
    super();
    this.state = { spinner: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.spinner) {
      this.setState({ spinner: true });
    }
  };

  render() {
    return (
      <button
        className={
          classnames(
            'sprk-c-Button',
            {'sprk-c-Button--secondary': this.props.buttonType === 'secondary'},
            {'sprk-c-Button--tertiary': this.props.buttonType === 'tertiary'},
            this.props.additionalClasses
          )}
        type="button"
        onClick={this.handleClick}
        data-id={this.props.idString}
        disabled={this.props.disabled}>
        { this.state.spinner && 'spinner' || this.props.children }
      </button>
    );
  }
}

export default SprkButton;