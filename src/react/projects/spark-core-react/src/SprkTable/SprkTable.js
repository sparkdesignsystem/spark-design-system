import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkButton } from '@sparkdesignsystem/spark-core-react';
import { uniqueId } from 'lodash';

const SprkTable = (props) => {
  
  const {
    data,
    columns,
    variant,
    idString, 
    additionalClasses, 
    additionalTableClasses,
    button,
    children, 
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
    {'sprk-b-Table--row-comparison' : variant === 'rowComparison'},
    additionalTableClasses 
  );

  if(variant === undefined || variant === 'secondary') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            <tr>
              {columns.map(col => {
                <th key={uniqueId('th_')}>{col.header}</th>
              })}
            </tr>
          </thead>
          
          {data &&
          <tbody>
          {data.map(row => 
            <tr key={uniqueId('row_')}>
              {columns.map( col => 
                <td key={col.name}>{row[col.name]}</td>  
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
              <tr key={uniqueId('row_')}>
                {row.map(col => 
                  <th key={uniqueId('th')} rowSpan={col.rowspan} colSpan={col.colspan}>{col.header}</th>
                )}
              </tr>
            )}
          </thead>
        
          {data &&
          <tbody>
            {data.map(row =>
              <tr key={uniqueId('row_')}>
                {columns.map(col => 
                  col.map(c => 
                    row.hasOwnProperty(c.name) &&
                      <td key={uniqueId('td_')}>{row[c.name]}</td>
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

  if(variant === 'rowComparison') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            <tr>
              <th class="sprk-b-Table__empty-heading"></th>
              {columns.map(col => {
                return <th key={uniqueId('th_')}>{col.header}</th>
              })}
            </tr>
          </thead>
          
          {data &&
          <tbody>
          {data.map(row => 
            <tr key={uniqueId('row_')}>
                <th>{row.rowHeading}</th>
              {columns.map( col => 
                <td key={uniqueId('td_')}>{row[col.name]}</td>  
              )}
            </tr>  
          )}
          </tbody>
          }
        </table>
      </div>
    );
  }

  if(variant === 'secondaryRowComparison') {

    const buttonVariant = button.variant ? button.variant : undefined;
    const buttonClasses = button.additionalClasses ? button.classes : undefined;
    const buttonAnalytics = button.analyticsString ? button.analyticsString : undefined;
    const buttonChildren = button.children ? button.children : undefined;
    const buttonDisabled = button.disabled ? button.disabled : undefined;
    const buttonIdString = button.idString ? button.idString : undefined;
    const buttonElement = button.element ? button.element : undefined;
    const buttonLoading = button.loading ? button.loading : undefined;
    const buttonRest = button.rest ? button.rest : undefined;
  
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          { data &&
          <tbody>
            {data.map(row => 
            <tr key={uniqueId('row_')}>
              <th>{row.rowHeading}</th>
              {columns.map( col => 
              <td key={uniqueId('td_')}>{row[col.name]}</td>  
              )}
              <td>
                <SprkButton 
                  variant={buttonVariant}
                  additionalClasses={buttonClasses}
                  analyticsString={buttonAnalytics}
                  disabled={buttonDisabled}
                  element={buttonElement}
                  idString={buttonIdString}
                  buttonRest
                >
                  {buttonChildren}
                </SprkButton>
              </td>
            </tr>  
            )}
          </tbody>
          }
        </table>
      </div>
    )
  }

  if(variant === 'html') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          {children}
        </table>
      </div>
    )
  }

}

SprkTable.propTypes = {
  // An array used to render the table headings
  columns: PropTypes.array,
  // An array of objects used to map and render the table row data
  data: PropTypes.arrayOf(PropTypes.object),
  // A string to determine what variant of the table should render
  variant: PropTypes.oneOf(['secondary', 'grouped', 'rowComparison', 'secondaryRowComparison', 'html']),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the table wrapper
  additionalClasses: PropTypes.string,
  // Any additional classes to add to the table
  additionalTableClasses: PropTypes.string,
  // And children markup to be rendered
  children: PropTypes.node,
}

SprkTable.defaultProps = {
  columms: [],
  data: [],
  variant: '',
  idString: '',
  additionalClasses: '',
  additionalTableClasses: '',
}

export default SprkTable;