import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkSpinner } from '@sparkdesignsystem/spark-core-react';

class SprkButton extends React.Component {
  constructor(){
    super();
    this.state = { hasSpinner: false };
    this.handleClick = this.handleClick.bind(this);
    this.getTagName = this.getTagName.bind(this);
  }

  handleClick() {
    if (this.props.spinnerOnClick) {
      this.setState({ hasSpinner: true });
    }
  };

  getTagName() {
    return (this.props.href ? 'a' : 'button');
  }

  componentDidUpdate(prevProps) {
    if (this.props.spinnerOnClick !== prevProps.spinnerOnClick) {
      this.setState({ hasSpinner : this.props.spinnerOnClick });
    }
  }

  render() {
    let TagName = this.getTagName();
    const {additionalClasses, children, spinnerOnClick, variant, idString, ...rest } = this.props;
    const {hasSpinner} = this.state;
    return (
      <TagName
        className={
          classnames(
            'sprk-c-Button',
            {'sprk-c-Button--secondary': variant === 'secondary'},
            {'sprk-c-Button--tertiary': variant === 'tertiary'},
            additionalClasses
          )}
        onClick={this.handleClick}
        data-id={idString}
        {...rest}>
        { (hasSpinner && <SprkSpinner />) || children }
      </TagName>
    );
  }
}

SprkButton.propTypes = {
  disabled: PropTypes.bool,
  idString: PropTypes.string,
  spinnerOnClick: PropTypes.bool,
  variant: PropTypes.string
}

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  spinnerOnClick: false
}

export default SprkButton;