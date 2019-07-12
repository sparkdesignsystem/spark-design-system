import React from 'react';
import PropTypes from 'prop-types';
import {
  SprkLink
} from '@sparkdesignsystem/spark-react';

const ComponentDocSample = ({ name, description, sprkComponent, sourceCode, ...rest }) =>
(
  <div className="sprk-u-mbm" id={`#${ name }`} {...rest}>
    <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
      <SprkLink href={`#${ name }`} variant="simple">
        { name }
      </SprkLink>
    </h3>

    <p className="sprk-b-TypeBodyTwo sprk-u-mbm">
      { description }
    </p>

    <div className="sprk-u-mbm">
      Spark Component:
      { sprkComponent }
    </div>

    <div className="sprk-u-mbm">
      sourceCode:
      { sourceCode }
    </div>
  </div>
);

export default ComponentDocSample;

ComponentDocSample.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
