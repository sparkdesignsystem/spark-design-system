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
  // The children that will be rendered inside the table
  children: PropTypes.node,
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the table wrapper
  additionalClasses: PropTypes.string,
  // Any additional classes to add to the table
  additionalTableClasses: PropTypes.string,
};

export default SprkTable;