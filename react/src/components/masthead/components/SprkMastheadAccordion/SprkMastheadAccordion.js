import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import SprkMastheadAccordionItem from '../SprkMastheadAccordionItem/SprkMastheadAccordionItem';

class SprkMastheadAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.links.map(item => ({ id: uniqueId(), ...item })),
    };
  }

  render() {
    const { additionalClasses, analyticsString, idString } = this.props;
    const { links } = this.state;
    return (
      <ul
        data-analytics={analyticsString}
        data-id={idString}
        className={classNames(
          'sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare',
          additionalClasses,
        )}
      >
        {links.map(link => (
          <SprkMastheadAccordionItem {...link} key={link.id} />
        ))}
      </ul>
    );
  }
}

SprkMastheadAccordion.propTypes = {
  /** classes to be added to the masthead */ 
  additionalClasses: PropTypes.string,
  /** assigned to data-analytics */ 
  analyticsString: PropTypes.string,
  /** assigned to data-id */ 
  idString: PropTypes.string,
  /** used to render SprkMastheadAccordionItems inside */ 
  links: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      leadingIcon: PropTypes.string,
      text: PropTypes.string,
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          leadingIcon: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
    }),
  ),
};

SprkMastheadAccordion.defaultProps = {
  links: [],
};

export default SprkMastheadAccordion;
