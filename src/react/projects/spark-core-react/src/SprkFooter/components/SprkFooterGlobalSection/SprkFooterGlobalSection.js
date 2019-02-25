import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkFooterGlobalSection extends Component {
  constructor(props) {
    super(props);

    if (props.globalItems.items !== undefined) {
      this.state = {
        globalItemsHasIds: props.globalItems.items.map(
          item => ({ id: uniqueId(), ...item }),
        ),
      };
    }
  }

  render() {
    const { globalItems } = this.props;
    const { globalItemsHasIds } = this.state;
    return (
      <div className="sprk-o-Stack__item sprk-o-Stack__item--three-tenths@m sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-prh">
        <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
          {globalItems.heading}
        </h3>
        { globalItemsHasIds.map((item) => {
          const TagName = item.element || 'a';
          return (
            <div key={item.id} className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div className="sprk-o-Stack__item">
                <TagName
                  className="sprk-b-Link sprk-b-Link--plain"
                  href={TagName === 'a' ? item.mediaHref || '#nogo' : undefined}
                  data-analytics={item.analyticsString}
                >
                  {item.mediaType === 'image'
                    && (
                      <img
                        className={item.mediaAddClasses}
                        src={item.src}
                        alt={item.altText}
                      />
                    )
                  }
                  {item.mediaType === 'SprkIcon'
                    && (
                      <SprkIcon
                        iconName={item.iconName}
                        additionalClasses={item.mediaAddClasses}
                      />
                    )
                  }
                  {item.mediaType === 'svg'
                    && <div>{item.svg}</div>
                  }
                </TagName>
              </div>

              <p className="sprk-o-Stack__item sprk-b-TypeBodyFour">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

SprkFooterGlobalSection.propTypes = {
  // The data for the global site items
  globalItems: PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      // The element to render for the global item's media
      mediaType: PropTypes.oneOf(['image', 'svg', 'SprkIcon']),
      // Assigned to src attribute of the image
      src: PropTypes.string,
      // Assigned to href
      mediaHref: PropTypes.string,
      // The alt text for the image
      altText: PropTypes.string,
      // Additional classes for the media
      mediaAddClasses: PropTypes.string,
      // The description of the image
      description: PropTypes.string,
      // The value for the data-analytics attribute
      analyticsString: PropTypes.string,
      // Element to render, can be 'a' or Link
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    })),
  }).isRequired,
};

export default SprkFooterGlobalSection;
