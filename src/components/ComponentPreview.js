import React from 'react';
import PropTypes from 'prop-types';
import IframeResizer from 'iframe-resizer-react';
import DevDocLinks from './DevDocLinks';

const ComponentPreview=(props)=>  {
    const {
      componentName,
      hasReact,
      hasAngular,
      hasHTML,
      componentType,
      minHeight,
      maxHeight,
      maxWidth,
      allowScrolling,
    } = this.props;
    const iframeURL = `https://html.sparkdesignsystem.com/iframe.html?id=${componentType}-${componentName}`;

    return (
      <div className="sprk-u-mbm sprk-u-ptl">
        <div className="sprk-u-mbl">
          <IframeResizer
            style={{
              minHeight,
              maxHeight,
              maxWidth,
            }}
            scrolling={allowScrolling}
            title="Component Preview"
            className="docs-c-ComponentPreview sprk-o-Box"
            src={iframeURL}
            loading="lazy"
          />
        </div>

        {(hasHTML || hasAngular || hasReact) && (
          <DevDocLinks
            hasAngular={hasAngular}
            hasHTML={hasHTML}
            hasReact={hasReact}
            componentType={componentType}
            componentName={componentName}
          />
        )}
      </div>
    );
  }


ComponentPreview.propTypes = {
  componentName: PropTypes.string,
  componentType: PropTypes.string,
  hasAngular: PropTypes.bool,
  hasReact: PropTypes.bool,
  hasHTML: PropTypes.bool,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  allowScrolling: PropTypes.bool,
};

ComponentPreview.defaultProps = {
  componentType: 'components',
  allowScrolling: false,
};

export default ComponentPreview;
