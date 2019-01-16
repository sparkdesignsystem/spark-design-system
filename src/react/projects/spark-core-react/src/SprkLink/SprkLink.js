import React from 'react';
import PropTypes from 'prop-types';

class SprkLink extends React.Component {
  getClassNames () {
    if (this.props.variant === 'cats') {
      return 'sprk-c-Link';
    }
  }

  render() {
    return (
      <a class={this.getClassNames} href="#nogo">Cats</a>
    );
  }
}

SprkLink.propTypes = {
  variant: PropTypes.string
};

export default SprkLink;
