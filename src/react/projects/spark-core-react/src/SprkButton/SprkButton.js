import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkSpinner } from '@sparkdesignsystem/spark-core-react';

class SprkButton extends React.Component {
  constructor(){
    super();
    this.getTagName = this.getTagName.bind(this);
  }

  getTagName() {
    return (this.props.href ? 'a' : 'button');
  }

  render() {
    let TagName = this.getTagName();
    const {additionalClasses, children, loading, variant, idString, ...rest } = this.props;

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
        { (loading && <SprkSpinner />) || children }
      </TagName>
    );
  }
}

SprkButton.propTypes = {
  disabled: PropTypes.bool,
  idString: PropTypes.string,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  loading: false
}

export default SprkButton;