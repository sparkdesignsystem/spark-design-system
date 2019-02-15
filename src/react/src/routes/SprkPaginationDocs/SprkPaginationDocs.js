import React, { Component } from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkPagination } from '@sparkdesignsystem/spark-core-react';
import sampleData from './stateData.js';
import * as _ from 'lodash';

class SprkPaginationDocs extends Component {
  constructor(props) {
    super(props);

    this.example_1_Updated_callback = this.example_1_Updated_callback.bind(this);
    this.example_2_Updated_callback = this.example_2_Updated_callback.bind(this);
    this.example_3_Updated_callback = this.example_3_Updated_callback.bind(this);

    this.state = {
      tableData: sampleData,
      example1Props: {
        currentPage: 1,
        totalItems: sampleData.length,
        itemsPerPage: 5
      },
      example2Props: {
        currentPage: 1,
        totalItems: sampleData.length,
        itemsPerPage: 5
      },
      example3Props: {
        currentPage: 1,
        totalItems: sampleData.length,
        itemsPerPage: 5
      }
    }
  }

  example_1_Updated_callback(args) {
    this.setState({
      example1Props: {
        currentPage: args.currentPage,
        totalItems: this.state.example1Props.totalItems,
        itemsPerPage: this.state.example1Props.itemsPerPage,
      }
    });
  }
  example_2_Updated_callback(args) {
    this.setState({
      example2Props: {
        currentPage: args.currentPage,
        totalItems: this.state.example2Props.totalItems,
        itemsPerPage: this.state.example2Props.itemsPerPage,
      }
    });
  }
  example_3_Updated_callback(args) {
    this.setState({
      example3Props: {
        currentPage: args.currentPage,
        totalItems: this.state.example3Props.totalItems,
        itemsPerPage: this.state.example3Props.itemsPerPage,
      }
    });
  }

  /*
    Returns a slice of the sample data based on the page size and current page
  */
  sliceSampleData(itemsPerPage, currentPage) {
    var firstIndexToInclude, lastIndexToInclude;

    firstIndexToInclude = itemsPerPage * (currentPage - 1);
    lastIndexToInclude = currentPage * itemsPerPage - 1;

    if (lastIndexToInclude > this.state.tableData.length - 1){
      lastIndexToInclude = this.state.tableData.length - 1;
    }

    return this.state.tableData.slice(firstIndexToInclude, lastIndexToInclude + 1);
  }

  /*
    build the table rows
  */
  buildTableRowMap(dataset, key){
    return dataset.map(usState => {
      return(
        <tr key={_.uniqueId(key)}>
          <td>{usState.state}</td>
          <td>{usState.abbreviation}</td>
          <td>{usState.capital}</td>
        </tr>
      )
    })
  }

  render(){

    var data1 = this.sliceSampleData(this.state.example1Props.itemsPerPage, this.state.example1Props.currentPage);
    var data2 = this.sliceSampleData(this.state.example2Props.itemsPerPage, this.state.example2Props.currentPage);
    var data3 = this.sliceSampleData(this.state.example3Props.itemsPerPage, this.state.example3Props.currentPage);

    var example1_rowsMap = this.buildTableRowMap(data1, 'table_1_');
    var example2_rowsMap = this.buildTableRowMap(data2, 'table_2_');
    var example3_rowsMap = this.buildTableRowMap(data3, 'table_3_');

    return (
      <CentralColumnLayout>
        <ExampleContainer heading="Default Paginator">
          <div className="sprk-u-mbm">

            <table className='drizzle-c-Table sprk-u-mbl'>
              <thead>
                <tr>
                  <th className='sprk-u-FontWeight--bold'>State</th>
                  <th className='sprk-u-FontWeight--bold'>Abbr.</th>
                  <th className='sprk-u-FontWeight--bold'>Capital</th>
                </tr>
              </thead>
              <tbody>
                {example1_rowsMap}
              </tbody>
            </table>

            <SprkPagination
              currentPage={this.state.example1Props.currentPage}
              totalItems={this.state.example1Props.totalItems}
              itemsPerPage={this.state.example1Props.itemsPerPage}
              callback={this.example_1_Updated_callback}
            />
          </div>
        </ExampleContainer>
        <ExampleContainer heading="Long Paginator">
          <div className="sprk-u-mbm">
          <table className='drizzle-c-Table sprk-u-mbl'>
              <thead>
                <tr>
                  <th className='sprk-u-FontWeight--bold'>State</th>
                  <th className='sprk-u-FontWeight--bold'>Abbr.</th>
                  <th className='sprk-u-FontWeight--bold'>Capital</th>
                </tr>
              </thead>
              <tbody>
                {example2_rowsMap}
              </tbody>
            </table>

            <SprkPagination
              currentPage={this.state.example2Props.currentPage}
              totalItems={this.state.example2Props.totalItems}
              itemsPerPage={this.state.example2Props.itemsPerPage}
              callback={this.example_2_Updated_callback}
              variant="long"
            />
          </div>
        </ExampleContainer>
        <ExampleContainer heading="Pager">
          <div className="sprk-u-mbm">
            <table className='drizzle-c-Table sprk-u-mbl'>
              <thead>
                <tr>
                  <th className='sprk-u-FontWeight--bold'>State</th>
                  <th className='sprk-u-FontWeight--bold'>Abbr.</th>
                  <th className='sprk-u-FontWeight--bold'>Capital</th>
                </tr>
              </thead>
              <tbody>
                {example3_rowsMap}
              </tbody>
            </table>

            <SprkPagination
              currentPage={this.state.example3Props.currentPage}
              totalItems={this.state.example3Props.totalItems}
              itemsPerPage={this.state.example3Props.itemsPerPage}
              callback={this.example_3_Updated_callback}
              variant="pager"
            />
          </div>
        </ExampleContainer>
      </CentralColumnLayout>
    );
  }
};

export default SprkPaginationDocs;
