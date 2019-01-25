import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkTable = (props) => {
  const { children, additionalClasses, additionalTableClasses, idString, ...other } = props;
  const wrapperClassNames = classnames(
    'sprk-b-TableContainer',
    additionalClasses
  );
  const tableClassNames = classnames(
    'sprk-b-Table',
    additionalTableClasses
  );

  return (
    <div className={wrapperClassNames} data-id={idString}>
      <table className={tableClassNames} {...other}>
        {children}
      </table>
    </div>
  );
}

SprkTable.propTypes = {
  // The children that will be rendered inside the link
  children: PropTypes.node,
  // The table variant that determines the class names
  variant: PropTypes.oneOf([]),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the table wrapper
  additionalClasses: PropTypes.string,
  // Any additional classes to add to the table
  additionalTableClasses: PropTypes.string,
};

export default SprkTable;