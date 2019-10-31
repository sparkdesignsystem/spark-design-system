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
      hasHTML
    } = this.props;
    const componentURL = `https://spark-sb-html.netlify.com/iframe.html?id=components-${componentName}`;

    return (
      <div className="sprk-o-Box">
        <div className="sprk-u-AbsoluteCenter">
          <IframeResizer
            title="Component Preview"
            className="docs-c-ComponentPreview"
            width="100%"
            src={componentURL}
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
                <SprkLink href="#">
                  HTML
                </SprkLink>
              </SprkListItem>
            )}

            {hasReact && (
              <SprkListItem>
                <SprkLink href="#">
                  React
                </SprkLink>
              </SprkListItem>
            )}

            {hasAngular && (
              <SprkListItem>
                <SprkLink href="#">
                  Angular
                </SprkLink>
              </SprkListItem>
            )}
          </SprkList>
          </>
        )}
      </div>
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
};

export default ComponentPreview;
