import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkTable = (props) => {
  const { children, variant, additionalClasses, idString, ...other } = props;
  const classNames = classnames(
    additionalClasses, {

    }
  );

  return (
    <div className="sprk-b-TableContainer" data-id={idString}>
      <table className={classNames} {...other}>
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
  // Any additional classes to add to the table
  additionalClasses: PropTypes.string
};

export default SprkTable;