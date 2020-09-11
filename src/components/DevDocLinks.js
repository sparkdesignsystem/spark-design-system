import React from 'react';
import PropTypes from 'prop-types';
import {
  SprkLink,
  SprkList,
  SprkListItem,
  SprkIcon
} from '@sparkdesignsystem/spark-react';

class DevDocLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      hasReact,
      hasAngular,
      hasHTML,
      componentName,
      componentType,
    } = this.props;

    return (
      <div className="sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray sprk-u-Measure">
        <h2 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Developer Documentation
        </h2>

        <p className="sprk-b-TypeBodyTwo sprk-u-mbl">
          Information on how to implement this component
          is available for the following technologies.
        </p>

        <SprkList
          element="ul"
          variant="bare"
          additionalClasses="sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large"
        >
          {hasHTML && (
            <SprkListItem>
              <SprkLink
                variant="has-icon"
                href={`https://html.sparkdesignsystem.com/?path=/story/${componentType}-${componentName}`}
                target="_blank"
              >
                HTML
                <SprkIcon
                  iconName="chevron-right"
                  additionalClasses="
                    sprk-u-mls
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color"
                />
              </SprkLink>
            </SprkListItem>
          )}

          {hasReact && (
            <SprkListItem>
              <SprkLink
                variant="has-icon"
                href={`https://react.sparkdesignsystem.com/?path=/story/${componentType}-${componentName}`}
                target="_blank"
              >
                React
                <SprkIcon
                  iconName="chevron-right"
                  additionalClasses="
                    sprk-u-mls
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color" />
              </SprkLink>
            </SprkListItem>
          )}

          {hasAngular && (
            <SprkListItem>
              <SprkLink
                variant="has-icon"
                href={`https://angular.sparkdesignsystem.com/?path=/story/${componentType}-${componentName}`}
                target="_blank"
              >
                Angular
                <SprkIcon
                  iconName="chevron-right"
                  additionalClasses="
                    sprk-u-mls
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color" />
              </SprkLink>
            </SprkListItem>
          )}
        </SprkList>
      </div>
    );
  }
};

DevDocLinks.propTypes = {
  hasAngular: PropTypes.bool,
  hasReact: PropTypes.bool,
  hasHTML: PropTypes.bool,
  componentName: PropTypes.string,
  componentType: PropTypes.string,
};

export default DevDocLinks;
