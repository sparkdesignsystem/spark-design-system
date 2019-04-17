import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { SprkPagination, SprkButton } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import datasets from './sampleData';

class SprkPaginationDocs extends Component {
  /*
    build the table rows
  */
  static buildTableRowMap(dataset, key) {
    return dataset.map(record => (
      <tr key={uniqueId(key)}>
        <td>{record[Object.keys(record)[0]]}</td>
        <td>{record[Object.keys(record)[1]]}</td>
        <td>{record[Object.keys(record)[2]]}</td>
      </tr>
    ));
  }

  /*
  Returns a slice of the sample data based on the page size and current page
  */
  static sliceSampleData(tableData, itemsPerPage, currentPage) {
    const firstIndexToInclude = itemsPerPage * (currentPage - 1);
    let lastIndexToInclude = currentPage * itemsPerPage - 1;

    if (lastIndexToInclude > tableData.length - 1) {
      lastIndexToInclude = tableData.length - 1;
    }

    return tableData.slice(firstIndexToInclude, lastIndexToInclude + 1);
  }

  constructor(props) {
    super(props);

    this.example_1_Updated_callback = this.example1UpdatedCallback.bind(this);
    this.example_2_Updated_callback = this.example2UpdatedCallback.bind(this);
    this.example_3_Updated_callback = this.example3UpdatedCallback.bind(this);

    this.swapExampleOneDataset = this.swapExampleOneDataset.bind(this);

    this.state = {
      example1Props: {
        currentPage: 1,
        totalItems: datasets.shipData.length,
        itemsPerPage: 3,
        dataset: datasets.shipData,
      },
      example2Props: {
        currentPage: 1,
        totalItems: datasets.stateData.length,
        itemsPerPage: 5,
        dataset: datasets.stateData,
      },
      example3Props: {
        currentPage: 1,
        totalItems: datasets.stateData.length,
        itemsPerPage: 5,
        dataset: datasets.stateData,
      },
    };
  }

  example1UpdatedCallback(args) {
    const {
      example1Props: { itemsPerPage, totalItems, dataset },
    } = this.state;

    this.setState({
      example1Props: {
        currentPage: args.newPage,
        totalItems,
        itemsPerPage,
        dataset,
      },
    });
  }

  swapExampleOneDataset() {
    const {
      example1Props: { itemsPerPage, totalItems },
    } = this.state;

    if (totalItems > 15) {
      this.setState({
        example1Props: {
          currentPage: 1,
          totalItems: datasets.shipData.length,
          itemsPerPage,
          dataset: datasets.shipData,
        },
      });
    } else {
      this.setState({
        example1Props: {
          currentPage: 1,
          totalItems: datasets.stateData.length,
          itemsPerPage,
          dataset: datasets.stateData,
        },
      });
    }
  }

  example2UpdatedCallback(args) {
    const {
      example2Props: { itemsPerPage, totalItems, dataset },
    } = this.state;

    this.setState({
      example2Props: {
        currentPage: args.newPage,
        totalItems,
        itemsPerPage,
        dataset,
      },
    });
  }

  example3UpdatedCallback(args) {
    const {
      example3Props: { itemsPerPage, totalItems, dataset },
    } = this.state;

    this.setState({
      example3Props: {
        currentPage: args.newPage,
        totalItems,
        itemsPerPage,
        dataset,
      },
    });
  }

  render() {
    const { example1Props, example2Props, example3Props } = this.state;

    const data1 = SprkPaginationDocs.sliceSampleData(
      example1Props.dataset,
      example1Props.itemsPerPage,
      example1Props.currentPage,
    );
    const data2 = SprkPaginationDocs.sliceSampleData(
      example2Props.dataset,
      example2Props.itemsPerPage,
      example2Props.currentPage,
    );
    const data3 = SprkPaginationDocs.sliceSampleData(
      example3Props.dataset,
      example3Props.itemsPerPage,
      example3Props.currentPage,
    );

    const example1RowsMap = SprkPaginationDocs.buildTableRowMap(
      data1,
      'table_1_',
    );
    const example2RowsMap = SprkPaginationDocs.buildTableRowMap(
      data2,
      'table_2_',
    );
    const example3RowsMap = SprkPaginationDocs.buildTableRowMap(
      data3,
      'table_3_',
    );

    return (
      <CentralColumnLayout>
        <ExampleContainer heading="Default Paginator">
          <div className="sprk-u-mbm">
            <SprkButton
              variant="primary"
              additionalClasses="sprk-u-mbm"
              onClick={() => {
                this.swapExampleOneDataset();
              }}
            >
              Swap Dataset/Variant
            </SprkButton>

            <table className="drizzle-c-Table sprk-u-mbl">
              <thead>
                <tr>
                  <th className="sprk-u-FontWeight--bold">Ship</th>
                  <th className="sprk-u-FontWeight--bold">Type</th>
                  <th className="sprk-u-FontWeight--bold">Source</th>
                </tr>
              </thead>
              <tbody>{example1RowsMap}</tbody>
            </table>

            <SprkPagination
              currentPage={example1Props.currentPage}
              totalItems={example1Props.totalItems}
              itemsPerPage={example1Props.itemsPerPage}
              onChangeCallback={this.example_1_Updated_callback}
            />
          </div>
        </ExampleContainer>

        <ExampleContainer heading="Default Paginator - Long">
          <div className="sprk-u-mbm">
            <table className="drizzle-c-Table sprk-u-mbl">
              <thead>
                <tr>
                  <th className="sprk-u-FontWeight--bold">State</th>
                  <th className="sprk-u-FontWeight--bold">Abbr.</th>
                  <th className="sprk-u-FontWeight--bold">Capital</th>
                </tr>
              </thead>
              <tbody>{example2RowsMap}</tbody>
            </table>

            <SprkPagination
              currentPage={example2Props.currentPage}
              totalItems={example2Props.totalItems}
              itemsPerPage={example2Props.itemsPerPage}
              onChangeCallback={this.example_2_Updated_callback}
            />
          </div>
        </ExampleContainer>

        <ExampleContainer heading="Pager">
          <div className="sprk-u-mbm">
            <table className="drizzle-c-Table sprk-u-mbl">
              <thead>
                <tr>
                  <th className="sprk-u-FontWeight--bold">State</th>
                  <th className="sprk-u-FontWeight--bold">Abbr.</th>
                  <th className="sprk-u-FontWeight--bold">Capital</th>
                </tr>
              </thead>
              <tbody>{example3RowsMap}</tbody>
            </table>

            <SprkPagination
              variant="pager"
              currentPage={example3Props.currentPage}
              totalItems={example3Props.totalItems}
              itemsPerPage={example3Props.itemsPerPage}
              onChangeCallback={this.example_3_Updated_callback}
            />
          </div>
        </ExampleContainer>
      </CentralColumnLayout>
    );
  }
}

export default SprkPaginationDocs;
