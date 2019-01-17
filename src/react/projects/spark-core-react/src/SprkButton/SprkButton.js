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
    if (this.props.spinner) {
      this.setState({ hasSpinner: true });
    }
  };

  getTagName() {
    return (this.props.href ? 'a' : 'button');
  }

  componentDidUpdate(prevProps) {
    if (this.props.spinner !== prevProps.spinner) {
      this.setState({ hasSpinner : this.props.spinner });
    }
  }

  render() {
    let TagName = this.getTagName();
    const {additionalClasses, children, spinner, variant, idString, ...rest } = this.props;
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
  spinner: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  spinner: false
}

export default SprkButton;