import React from 'react';
import PropTypes from 'prop-types';
import IframeResizer from 'iframe-resizer-react';

import {
  SprkLink,
  SprkList,
  SprkListItem
} from '@sparkdesignsystem/spark-react';

class ComponentPreview extends React.Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  // resizePreview(elementRef) {
  //   console.log(elementRef, 'cats')
  //   elementRef.current.style.height = elementRef.current.contentWindow.document.body.scrollHeight + 'px';
  // }

  // componentDidMount() {
  //   this.resizePreview(this.iframeRef);
  // }

  render() {
    const {
      componentName,
      hasReact,
      hasAngular,
      hasHTML,
      componentType,
    } = this.props;
    const componentIframeURL = `https://spark-sb-html.netlify.com/iframe.html?id=${componentType}-${componentName}`;
    const devcomponentURL = `https://deploy-preview-2267--spark-sb-html.netlify.com/iframe.html?id=${componentType}-${componentName}`;

    return (
      <>
        <div className="sprk-u-AbsoluteCenter sprk-u-mbm sprk-o-Box">
          <IframeResizer
            title="Component Preview"
            className="docs-c-ComponentPreview"
            src={devcomponentURL}
          />
        </div>

        {(hasHTML || hasAngular || hasReact) && (
          <>
          <SprkList
            element="ul"
            variant="bare"
            additionalClasses="sprk-o-HorizontalList"
          >
            {hasHTML && (
              <SprkListItem>
                <SprkLink
                  href={`https://spark-sb-html.netlify.com/?path=/story/${componentType}-${componentName}`}
                  target="_blank">
                  HTML
                </SprkLink>
              </SprkListItem>
            )}

            {hasReact && (
              <SprkListItem>
                <SprkLink
                  href={`https://spark-sb-react.netlify.com/?path=/story/${componentType}-${componentName}`}
                  target="_blank">
                  React
                </SprkLink>
              </SprkListItem>
            )}

            {hasAngular && (
              <SprkListItem>
                <SprkLink
                  href={`https://spark-sb-angular.netlify.com/?path=/story/${componentType}-${componentName}`}
                  target="_blank">
                  Angular
                </SprkLink>
              </SprkListItem>
            )}
          </SprkList>
          </>
        )}
      </>
    );
  }
};

ComponentPreview.propTypes = {
  isVisible: PropTypes.string,
};

ComponentPreview.defaultProps = {
  hasAngular: true,
  hasReact: true,
  hasHTML: true,
  componentType: 'components',
};

export default ComponentPreview;
