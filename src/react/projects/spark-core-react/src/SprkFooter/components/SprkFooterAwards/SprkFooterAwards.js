import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';

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

        <div className="sprk-o-Stack__item">
          <div>
            <a className="sprk-b-TypeBodyFour sprk-b-Link sprk-b-Link--simple sprk-b-Link--has-icon sprk-u-FontWeight--normal" href="#nogo">
              <svg className="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle sprk-u-mrs" viewBox="0 0 64 64">
                <use xlinkHref="#chevron-down-circle-two-color" />
              </svg>
              {awards.disclaimerTitle}
            </a>

            <div>
              <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
                {awards.disclaimerText}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
  }).isRequired,
};

export default SprkFooterAwards;
