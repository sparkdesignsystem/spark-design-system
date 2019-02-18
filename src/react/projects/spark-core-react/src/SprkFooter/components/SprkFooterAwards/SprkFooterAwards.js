import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import SprkToggle from '../../../SprkToggle/SprkToggle';

class SprkFooterAwards extends Component {
  constructor(props) {
    super(props);
    if (props.awards.images !== undefined) {
      this.state = {
        awardsImagesHasIds: props.awards.images.map(
          item => ({ id: uniqueId(), ...item }),
        ),
      };
    }
  }

  render() {
    const { awards } = this.props;
    if (awards.images === undefined) return false;
    const { awardsImagesHasIds } = this.state;
    return (
      <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large">
        <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
          {awards.heading}
        </h3>

        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-mbm">
          {awardsImagesHasIds.map(image => (
            <div key={image.id} className="sprk-o-Stack__item">
              <a href={image.href}>
                <img className={image.addClasses} src={image.src} alt={image.altText} />
              </a>
            </div>
          ))}
        </div>

        <SprkToggle
          additionalClasses="sprk-o-Stack__item"
          toggleIconName="chevron-down-circle-two-color"
          title={awards.disclaimerTitle}
          titleAddClasses="sprk-b-TypeBodyFour sprk-u-FontWeight--normal"
          analyticsString={awards.disclaimerAnalytics}
        >
          <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
            {awards.disclaimerText}
          </p>
        </SprkToggle>
      </div>
    );
  }
}

SprkFooterAwards.defaultProps = {
  awards: {},
};

SprkFooterAwards.propTypes = {
  // The data for the global site items
  awards: PropTypes.shape({
    heading: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      // The link href for the image
      href: PropTypes.string,
      // The image src
      src: PropTypes.string,
      // Image alt text
      altText: PropTypes.string,
      // Additional classes for the image
      addClasses: PropTypes.string,
    })),
    // The text rendered in the disclaimer
    disclaimerText: PropTypes.string,
    // Used for the data-analytics value on the title
    disclaimerAnalytics: PropTypes.string,
    // The title text rendered in the disclaimer
    disclaimerTitle: PropTypes.string,
  }),
};

export default SprkFooterAwards;
