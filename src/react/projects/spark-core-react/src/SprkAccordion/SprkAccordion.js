import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';

class SprkAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.children.map(item => ({ id: uniqueId('accordion-item-'), ...item })),
    };
  }

  render() {
    const { idString, ...other } = this.props;
    const { items } = this.state;
    return (
      <ul
        className="sprk-c-Accordion sprk-o-VerticalList"
        data-id={idString}
        {...other}
      >
        {items.map(item => (
            <SprkAccordionItem
              {...item.props}
              key={item.id}
              id={item.id}
            />
        ))}
      </ul>
    );
  }
}

SprkAccordion.defaultProps = {
  idString: '',
};

SprkAccordion.propTypes = {
  // Expects SprkAccordionItem as children
  children: PropTypes.node.isRequired,
  // An optional id for automated testing
  idString: PropTypes.string,
};

export default SprkAccordion;
