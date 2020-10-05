import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkToggle from '../toggle/SprkToggle';
import SprkStack from '../../objects/stack/SprkStack';

const SprkAward = (props) => {
  const {
    idString,
    additionalClasses,
    heading,
    disclaimerTitle,
    disclaimerText,
    disclaimerAnalytics,
    images,
    splitAt,
    itemSpacing,
  } = props;
  const classNames = classnames(additionalClasses);

  return (
    <SprkStack
      additionalClasses={classNames}
      idString={idString}
      itemSpacing={itemSpacing}
    >
      <h2
        className="
          sprk-o-Stack__item
          sprk-o-Stack__item--center-column
          sprk-b-TypeDisplayFive
          sprk-b-Measure
          sprk-b-Measure--narrow
          sprk-u-TextAlign--center"
      >
        {heading}
      </h2>

      <SprkStack
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--center-column"
        splitAt={splitAt}
        itemSpacing={itemSpacing}
      >
        {images.map((image) => {
          const {
            analyticsString,
            href,
            linkAddClasses,
            addClasses,
            alt,
            src,
            element,
            ...rest
          } = image;
          const TagName = element || 'a';
          return (
            <TagName
              className={classnames(
                'sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack',
                linkAddClasses,
              )}
              href={TagName === 'a' ? href || '#nogo' : undefined}
              data-analytics={analyticsString}
              key={uniqueId('award-img-')}
              {...rest}
            >
              <img
                className={classnames(
                  'sprk-o-Stack__item sprk-o-Stack__item--center-column',
                  addClasses,
                )}
                alt={alt}
                src={src}
              />
            </TagName>
          );
        })}
      </SprkStack>

      {(disclaimerTitle || disclaimerText) && (
        <SprkToggle
          title={disclaimerTitle}
          analyticsString={disclaimerAnalytics}
          additionalClasses="sprk-o-Stack__item"
        >
          <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
            {disclaimerText}
          </p>
        </SprkToggle>
      )}
    </SprkStack>
  );
};

SprkAward.defaultProps = {
  splitAt: 'small',
  itemSpacing: 'medium',
};

SprkAward.propTypes = {
  /** Determines the spacing between the items. */
  itemSpacing: PropTypes.string,
  /**
   * Determines when the flex-direction should
   * change to row from column for the images.
   */
  splitAt: PropTypes.string,
  /**
   * A space-separated string of classes to add
   * to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /** Heading text. */
  heading: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /** The image data. */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /** The link href for the image. */
      href: PropTypes.string,
      /** Element to render, can be 'a' or Link. */
      element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      /** The image src. */
      src: PropTypes.string.isRequired,
      /** The alt text for the image, icon, or SprkIcon. */
      alt: PropTypes.string.isRequired,
      /** Additional classes for the image. */
      addClasses: PropTypes.string,
      /** Additional classes for the link wrapping the image. */
      linkAddClasses: PropTypes.string,
      /**
       * Assigned to the `data-analytics` attribute
       * serving as a unique selector for outside libraries to capture data.
       */
      analyticsString: PropTypes.string,
    }),
  ).isRequired,
  /** The text rendered in the disclaimer. */
  disclaimerText: PropTypes.string,
  /** Used for the data-analytics value on the title. */
  disclaimerAnalytics: PropTypes.string,
  /** The title text rendered in the disclaimer. */
  disclaimerTitle: PropTypes.string,
};

export default SprkAward;
