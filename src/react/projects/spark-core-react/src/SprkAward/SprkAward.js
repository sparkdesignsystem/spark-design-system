import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkToggle from '../SprkToggle/SprkToggle';
import SprkStack from '../SprkStack/SprkStack';

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
  } = props;
  const classNames = classnames('sprk-o-CenteredColumn', additionalClasses);

  return (
    <SprkStack className={classNames} data-id={idString} splitAt={splitAt}>
      <h2 className="sprk-o-Stack__item sprk-o-Stack__item--center-column sprk-b-TypeDisplayFive sprk-b-Measure sprk-b-Measure--narrow sprk-u-TextAlign--center">
        {heading}
      </h2>

      <div className="sprk-o-Stack__item sprk-o-Stack__item--center-column sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
        {images.map(image => (
          <a
            className={classnames('sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack', image.linkAddClasses)}
            href={image.href}
            data-analytics={image.analyticsString}
            key={uniqueId('award-img-')}
          >
            <img
              className={classnames('sprk-o-Stack__item sprk-o-Stack__item--center-column', image.addClasses)}
              alt={image.alt}
              src={image.src}
            />
          </a>
        ))}

      </div>

      <SprkToggle title={disclaimerTitle} analyticsString={disclaimerAnalytics} additionalClasses="sprk-o-Stack__item">
        <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
          {disclaimerText}
        </p>
      </SprkToggle>
    </SprkStack>
  );
};

SprkAward.defaultProps = {
  splitAt: 'medium',
  additionalClasses: '',
  idString: '',
  heading: '',
  disclaimerText: '',
  disclaimerAnalytics: '',
  disclaimerTitle: '',
};

SprkAward.propTypes = {
  // Determines when the flex-direction should change to row from column
  splitAt: PropTypes.string,
  // Additional CSS classes on main award container
  additionalClasses: PropTypes.string,
  // Heading text
  heading: PropTypes.string,
  idString: PropTypes.string,
  // The image data
  images: PropTypes.arrayOf(
    PropTypes.shape({
      // The link href for the image
      href: PropTypes.string,
      // Element to render, can be 'a' or Link
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      // The image src
      src: PropTypes.string,
      // The alt text for the image, icon, or SprkIcon
      alt: PropTypes.string.isRequired,
      // Additional classes for the image
      addClasses: PropTypes.string,
      // String used for the data-analytics attribute
      analyticsString: PropTypes.string,
    }),
  ).isRequired,
  // The text rendered in the disclaimer
  disclaimerText: PropTypes.string,
  // Used for the data-analytics value on the title
  disclaimerAnalytics: PropTypes.string,
  // The title text rendered in the disclaimer
  disclaimerTitle: PropTypes.string,
};

export default SprkAward;
