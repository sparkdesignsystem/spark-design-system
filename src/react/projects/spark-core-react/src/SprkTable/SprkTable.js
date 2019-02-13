import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkTable = (props) => {
  
  const {
    data,
    columns,
    variant,
    idString, 
    additionalClasses, 
    additionalTableClasses, 
    ...other
  } = props;
  
  const wrapperClassNames = classnames(
    'sprk-b-TableContainer',
    additionalClasses
  );

  const tableClassNames = classnames(
    'sprk-b-Table',
    {'sprk-b-Table--secondary' : variant === "secondary"},
    {'sprk-b-Table--secondary-row-comparison' : variant === "secondaryRowComparison"},
    {'sprk-b-Table--grouped-columns' : variant === "grouped"},
    additionalTableClasses 
  );

  if(variant === undefined || variant === 'secondary') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            <tr>
              {columns.map(col => {
                <th key={col.key}>{col.header}</th>
              })}
            </tr>
          </thead>
          
          {data &&
          <tbody>
          {data.map(row => 
            <tr key={row.key}>
              {columns.map( col => 
                <td key={col.key}>{row[col.key]}</td>  
              )}
            </tr>  
          )}
          </tbody>
          }
        </table>
      </div>
    );
  }

  if(variant === 'grouped') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            {columns.map(row => 
              <tr>
                {row.map(col => 
                  <th key={col.key} rowSpan={col.rowspan} colSpan={col.colspan}>{col.header}</th>
                )}
              </tr>
            )}
          </thead>
        
          {data &&
          <tbody>
            {data.map(row =>
              <tr key={row.key}>
                {columns.map(col => 
                  col.map(c => 
                    row.hasOwnProperty(c.key) &&
                      <td key={c.key}>{row[c.key]}</td>
                  )
                )}
              </tr>
            )}
          </tbody>
          }
        </table>
      </div>
    )
  }
}

export default SprkTable;