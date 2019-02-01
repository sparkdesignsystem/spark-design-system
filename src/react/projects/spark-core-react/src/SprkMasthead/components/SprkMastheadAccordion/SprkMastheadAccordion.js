import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadAccordionItem from '../SprkMastheadAccordionItem/SprkMastheadAccordionItem';

function SprkMastheadAccordion({additionalClasses, analyticsString, idString, links}) {
    return (
      <ul
        data-analytics={analyticsString}
        data-id={idString}
        className={classNames("sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare", additionalClasses)}>
        {links.map((link, id) => {
          return (
            <SprkMastheadAccordionItem
              {...link}
              key={id} />
          );
        })}
      </ul>
    );
}

SprkMastheadAccordion.propTypes = {
  // classes to be added to the masthead
  additionalClasses: PropTypes.string,
  // assigned to data-analytics
  analyticsString: PropTypes.string,
  // assigned to data-id
  idString: PropTypes.string,
  // used to render SprkMastheadAccordionItems inside
  links: PropTypes.array
};

SprkMastheadAccordion.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
  links: []
};

export default SprkMastheadAccordion;