import React from 'react';
import PropTypes from 'prop-types';

const SprkCardHighlightedHeader = (props) => {
  const { highlightedHeaderConfig } = props;
  const { description, title, bodyText } = highlightedHeaderConfig;

  return (
    <React.Fragment>
      <div
        className="
          sprk-o-Stack__item
          sprk-c-Card__header
          sprk-o-Stack
          sprk-o-Stack--medium
        "
      >
        <h3
          className="
            sprk-b-TypeDisplaySeven
            sprk-o-Stack__item
            sprk-u-Color--white
          "
        >
          {description}
        </h3>
        <h4
          className="
            sprk-b-TypeDisplayFive
            sprk-o-Stack__item
            sprk-u-Color--white
            "
        >
          {title}
        </h4>
      </div>
      <div
        className="
          sprk-o-Stack__item
          sprk-o-Stack
          sprk-o-Stack--medium
          sprk-c-Card__content
          "
      >
        <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">{bodyText}</p>
      </div>
    </React.Fragment>
  );
};

SprkCardHighlightedHeader.propTypes = {
  /**
   * Configuration data for the Highlighted Header variant of
   * the Card.
   */
  highlightedHeaderConfig: PropTypes.shape({
    /**
     * Text inside of Highlighted Header Card.
     */
    bodyText: PropTypes.string,
    /** Sub-headline of the Highlighted Header Card. */
    description: PropTypes.string,
    /** Headline of the Highlighted Header Card. */
    title: PropTypes.string,
  }),
};

export default SprkCardHighlightedHeader;
