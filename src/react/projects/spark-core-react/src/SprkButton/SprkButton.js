import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkSpinner } from '@sparkdesignsystem/spark-core-react';

class SprkButton extends React.Component {
  constructor(){
    super();
    this.state = { spinner: false };
    this.handleClick = this.handleClick.bind(this);
    this.getTagName = this.getTagName.bind(this);
  }

  handleClick() {
    if (this.props.spinner) {
      this.setState({ spinner: true });
    }
  };

  getTagName() {
    return (this.props.href ? 'a' : 'button');
  }

  componentDidUpdate() {
    if (this.props.spinner) {
      this.setState({ spinner : true });
    }
  }

  render() {
    let TagName = this.getTagName();
    return (
      <TagName
        className={
          classnames(
            'sprk-c-Button',
            {'sprk-c-Button--secondary': this.props.variant === 'secondary'},
            {'sprk-c-Button--tertiary': this.props.variant === 'tertiary'},
            this.props.additionalClasses
          )}
        href={this.props.href}
        type={this.props.type}
        onClick={this.handleClick}
        data-id={this.props.idString}
        disabled={this.props.disabled}
        style={{ width: this.props.width }}>
        { (this.state.spinner && <SprkSpinner />) || this.props.children }
      </TagName>
    );
  }
}

SprkButton.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  idString: PropTypes.string,
  spinner: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string
}

SprkButton.defaultProps = {
  variant: 'primary',
  disabled: false,
  spinner: false,
  type: 'button',
  width: 'auto'
}

export default SprkButton;