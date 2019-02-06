import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkTable = (props) => {
  const { columns, rows, additionalClasses, additionalTableClasses, idString, ...other } = props;
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
        <thead className="sprk-b-Table__head">
          <tr>
            {columns.map(col => 
              <th 
                key={col.name} 
                colSpan={col.colspan} 
                rowSpan={col.rowspan}>
                  {col.header}
              </th>  
            )}
          </tr>
        </thead>
        <tbody>
              {rows.map(row => 
                <tr key={row.column1}>
                  {columns.map( col =>
                    <td key={col.name}>{row[col.name]}</td>
                  )}
                </tr>
              )}
        </tbody>
      </table>
    </div>
  );
}

SprkTable.propTypes = {
  // An array used to render the table headings
  columns: PropTypes.array.isRequired,
  // An array of objects used to map and render the table row data
  rows: PropTypes.arrayOf(PropTypes.object),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the table wrapper
  additionalClasses: PropTypes.string,
  // Any additional classes to add to the table
  additionalTableClasses: PropTypes.string,
};

export default SprkTable;