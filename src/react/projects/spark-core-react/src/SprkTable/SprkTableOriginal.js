import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { cpus } from 'os';

const SprkTable = (props) => {
  const { 
    // rowComparison, 
    // order, 
    // columns, 
    // subHeadings, 
    // rows, 
    data,
    additionalClasses, 
    additionalTableClasses, 
    idString, 
    ...other 
    } = props;
  const wrapperClassNames = classnames(
    'sprk-b-TableContainer',
    additionalClasses
  );
  const tableClassNames = classnames(
    'sprk-b-Table',
    {'sprk-b-Table--row-comparison': rowComparison},
    additionalTableClasses 
  );
  // let columnData = [];
  // columns.map(column => columnData.push(column));
  // console.log(columnData);

  // if(subHeadings) {
  //   subHeadings.map(subHeading => 
  //     columnData.push(subHeading));
  // }

  // Check to see if order prop is being used
  // let orderedColumns = false;
  // columnData.map(data => 
  //   {
  //     if(data.hasOwnProperty('order')){
  //       orderedColumns = true;
  //     }
  //   }
  // )

  // If order prop is being used, re-order the array
  // if(orderedColumns) {
  //   const columnDataOrdered = [];
  //   columnData.map(data => 
  //     {
  //       if(data.hasOwnProperty('order')){
  //         columnDataOrdered.push(data);
  //       }
  //     }
  //   )
  //   columnDataOrdered.sort(function(a,b){
  //     return a.order - b.order;
  //   });
  //   columnData = columnDataOrdered;
  // }

  return (
    <div className={wrapperClassNames} data-id={idString}>
      <table className={tableClassNames} {...other}>
        <thead className="sprk-b-Table__head">
          <tr>
            {/* { rowComparison &&
              <th className="sprk-b-Table__empty-heading"></th>
            } */}
            {data.map(col => 
              <th 
                key={col.key} 
                colSpan={col.colspan} 
                rowSpan={col.rowspan}>
                  {col.key}
              </th>  
            )}
          </tr>
          {/* { subHeadings &&
          <tr>
            {subHeadings.map(subHeading =>
              <th
                className="sprk-b-Table--grouped-column"
                key={subHeading.name} >
                  {subHeading.header}  
              </th>
            )}
          </tr>
          } */}
        </thead>
        <tbody>
              {rows.map(row => 
                <tr key={row.column1}>
                  {columnData.map( col =>
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
  // An array used to render the subheadings if applicable
  subHeadings: PropTypes.array,
  // A number that is used to specify the order of columns where the tbody data is rendered. This does not affect the order of the thead order.
  order: PropTypes.number,
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