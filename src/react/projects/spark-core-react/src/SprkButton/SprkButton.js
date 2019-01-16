import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkSpinner } from '@sparkdesignsystem/spark-core-react';

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
        disabled={this.props.disabled}
        style={{ width: this.props.width }}>
        { (this.state.spinner && <SprkSpinner />) || this.props.children }
      </button>
    );
  }
}

SprkButton.propTypes = {
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  idString: PropTypes.string,
  width: PropTypes.string,
  spinner: PropTypes.bool
}

export default SprkButton;