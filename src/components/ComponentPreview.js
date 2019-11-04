import React from 'react';
import PropTypes from 'prop-types';
import IframeResizer from 'iframe-resizer-react';
import DevDocLinks from './DevDocLinks';

class ComponentPreview extends React.Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  render() {
    const {
      componentName,
      hasReact,
      hasAngular,
      hasHTML,
      componentType,
      minHeight,
      maxWidth,
    } = this.props;
    const componentIframeURL = `https://spark-sb-html.netlify.com/iframe.html?id=${componentType}-${componentName}`;
    const devcomponentURL = `https://deploy-preview-2267--spark-sb-html.netlify.com/iframe.html?id=${componentType}-${componentName}`;

    return (
      <div className="sprk-u-mbm sprk-u-ptl">
        <div className="sprk-u-mbl">
          <IframeResizer
            style={{
              minHeight: minHeight,
              maxWidth: maxWidth
            }}
            title="Component Preview"
            className="docs-c-ComponentPreview sprk-o-Box"
            src={devcomponentURL}
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
};

ComponentPreview.propTypes = {
  isVisible: PropTypes.string,
  minHeight: PropTypes.string,
  componentName: PropTypes.string,
  hasAngular: PropTypes.bool,
  hasReact: PropTypes.bool,
  hasHTML: PropTypes.bool,
};

ComponentPreview.defaultProps = {
  componentType: 'components',
};

export default ComponentPreview;
