import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const SprkTable = (props) => {
  const {
    rows,
    columns,
    variant,
    idString,
    additionalContainerClasses,
    additionalTableClasses,
    children,
    ...other
  } = props;

  const wrapperClassNames = classnames(
    'sprk-b-TableContainer',
    additionalContainerClasses,
  );

  const tableClassNames = classnames(
    'sprk-b-Table',
    { 'sprk-b-Table--secondary': variant === 'secondary' },
    {
      'sprk-b-Table--secondary-row-comparison':
        variant === 'secondaryRowComparison',
    },
    { 'sprk-b-Table--grouped-columns': variant === 'grouped' },
    { 'sprk-b-Table--row-comparison': variant === 'rowComparison' },
    additionalTableClasses,
  );

  if (variant === 'grouped') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            {columns.length > 0 &&
              columns.map((row) => (
                <tr key={uniqueId('row_')}>
                  {row.map((col) => (
                    <th
                      key={uniqueId('th')}
                      rowSpan={col.rowspan}
                      colSpan={col.colspan}
                    >
                      {col.header}
                    </th>
                  ))}
                </tr>
              ))}
          </thead>

          {rows.length > 0 && (
            <tbody>
              {rows.map((row) => (
                <tr key={uniqueId('row_')}>
                  {row.map((item) => (
                    <td key={uniqueId('td_')}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
  }
  if (variant === 'rowComparison') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          <thead className="sprk-b-Table__head">
            {columns.length > 0 && (
              <tr>
                <th className="sprk-b-Table__empty-heading" />
                {columns.map((col) => (
                  <th key={uniqueId('th_')}>{col.header}</th>
                ))}
              </tr>
            )}
          </thead>

          {rows.length > 0 && (
            <tbody>
              {rows.map((row) => (
                <tr key={uniqueId('row_')}>
                  <th>{row.rowHeading}</th>
                  {columns.length > 0 &&
                    columns.map((col) => (
                      <td key={uniqueId('td_')}>{row[col.name]}</td>
                    ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
  }
  if (variant === 'secondaryRowComparison') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          {rows.length > 0 && (
            <tbody>
              {rows.map((row) => (
                <tr key={uniqueId('row_')}>
                  <th>{row.rowHeading}</th>
                  {columns.length > 0 &&
                    columns.map((col) => (
                      <td key={uniqueId('td_')}>{row[col.name]}</td>
                    ))}
                  {row.button && <td>{row.button}</td>}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
  }

  if (variant === 'html') {
    return (
      <div className={wrapperClassNames} data-id={idString}>
        <table className={tableClassNames} {...other}>
          {children}
        </table>
      </div>
    );
  }
  return (
    <div className={wrapperClassNames} data-id={idString}>
      <table className={tableClassNames} {...other}>
        <thead className="sprk-b-Table__head">
          {columns.length > 0 && (
            <tr>
              {columns.map((col) => (
                <th key={uniqueId('th_')}>{col.header}</th>
              ))}
            </tr>
          )}
        </thead>

        {rows.length > 0 && (
          <tbody>
            {rows.map((row) => (
              <tr key={uniqueId('row_')}>
                {columns.length > 0 &&
                  columns.map((col) => (
                    <td key={uniqueId('td_')}>{row[col.name]}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

SprkTable.propTypes = {
  /** Array used to render the table headings. */
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.array),
  ]),
  /** An array of objects used to map and render the table row data. */
  rows: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.array),
  ]),
  /** Determines what variant of the table should render. */
  variant: PropTypes.oneOf([
    'default',
    'secondary',
    'grouped',
    'rowComparison',
    'secondaryRowComparison',
    'html',
  ]),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalContainerClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to the table.
   */
  additionalTableClasses: PropTypes.string,
  /**
   * Content to render inside of components.
   * Available only to the `html` variant.
   */
  children: PropTypes.node,
};

SprkTable.defaultProps = {
  columns: [],
  rows: [],
  variant: 'default',
  idString: '',
  additionalContainerClasses: '',
  additionalTableClasses: '',
  children: '',
};

export default SprkTable;
