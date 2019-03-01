import React from 'react';
import PropTypes from 'prop-types';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';

const SprkAccordion = (props) => {
  const { children, idString, ...other } = props;
  return (
    <ul className="sprk-c-Accordion sprk-o-VerticalList" data-id={idString} {...other}>
      {children}
    </ul>
  );
};

SprkAccordion.Item = SprkAccordionItem;

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
