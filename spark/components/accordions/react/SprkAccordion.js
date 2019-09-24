import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';
import SprkAccordionItem from './SprkAccordionItem';

class SprkAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.children.map(item => ({
        id: uniqueId('accordion-item-'),
        ...item,
      })),
    };
  }

  render() {
    const { idString, additionalClasses, ...other } = this.props;
    const { items } = this.state;
    return (
      <ul
        className={classnames(
          'sprk-c-Accordion sprk-o-VerticalList',
          additionalClasses,
        )}
        data-id={idString}
        {...other}
      >
        {items.map((item) => {
          if (item.type.name !== SprkAccordionItem.name) return null;
          return (
            <SprkAccordionItem {...item.props} key={item.id} id={item.id} />
          );
        })}
      </ul>
    );
  }
}

SprkAccordion.propTypes = {
  /** Value added to accordion container as additional classes */ 
  additionalClasses: PropTypes.string,
  /** Expects SprkAccordionItem as children */ 
  children: PropTypes.node.isRequired,
  /** An optional id for automated testing */ 
  idString: PropTypes.string,
};

export default SprkAccordion;
