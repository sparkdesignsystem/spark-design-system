import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
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
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * Used to render child `SprkMastheadAccordionItem`.
   */
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
