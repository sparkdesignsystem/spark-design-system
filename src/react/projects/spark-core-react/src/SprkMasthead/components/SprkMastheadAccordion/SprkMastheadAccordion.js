import React from 'react';
import PropTypes from 'prop-types';
import SprkMastheadAccordionItem from '../SprkMastheadAccordionItem/SprkMastheadAccordionItem';

function SprkMastheadAccordion({links}) {
    return (
      <ul className="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
        {links.map((link, id) => {
          return (
            <SprkMastheadAccordionItem link={link} key={id} />
          );
        })}
      </ul>
    );
}

SprkMastheadAccordion.propTypes = {
  links: PropTypes.array
};

SprkMastheadAccordion.defaultProps = {
  links: []
};

export default SprkMastheadAccordion;