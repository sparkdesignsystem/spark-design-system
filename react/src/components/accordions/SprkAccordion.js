import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';

class SprkAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.children.map((item) => ({
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
  /**
   * A space-separated string of classes to add to the outermost container
   * of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Expects `SprkAccordionItem` as children.
   */
  children: PropTypes.node.isRequired,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
};

export default SprkAccordion;
