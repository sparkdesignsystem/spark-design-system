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
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Used to render children of `SprkMastheadAccordionItem`.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Determines if link renders as an anchor tag, or router link.
       */
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * When the link is rendered to a compatible element
       * (narrowNav), will draw the specified icon
       * to the left of the link text.
       */
      leadingIcon: PropTypes.string,
      /**
       * Text for accordion link
       */
      text: PropTypes.string,
      /**
       * Expects an array containing link objects.
       *  Will be treated as a subnav to the link.
       */
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Determines if link renders as an anchor tag, or router link.
           */
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          /**
           * When the link is rendered to a compatible element
           * (narrowNav), will draw the specified icon
           * to the left of the link text.
           */
          leadingIcon: PropTypes.string,
          /**
           * text for sub na link
           */
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
