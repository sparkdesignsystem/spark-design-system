import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { cpus } from 'os';

const SprkTable = (props) => { 
  const { data, columnNames } = props;

  const TableHead = () => {
    return (
    <tr className="">
      {columnNames.map(col => {
        return <th key={col.key}>{col.displayText}</th>
      })}
    </tr>
    )
  }

  const TableSubHead = () => {
    {columnNames.map(col => {
          
    })}
    return (
      <tr>

      </tr>
    )
  }

  const TableBody = () => {
    return (
      <React.Fragment>
      {data.map(row => {
        return (
          <tr key={row.id}>
          {columnNames.map(col => {
            return <td key={col.key}>{row[col.key]}</td>
          })}
        </tr>
        )
      })}
      </React.Fragment>
    )
  }

  return (
    <div className="sprk-b-TableContainer">
      <table className="sprk-b-Table">
        <thead>
          <TableHead/>
          <TableSubHead/>
        </thead>
        <tbody>
          <TableBody/>
        </tbody>
      </table>
    </div>
  )
}

export default SprkTable;