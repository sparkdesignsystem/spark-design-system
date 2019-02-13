import React, { Component } from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkPagination } from '@sparkdesignsystem/spark-core-react';
import { strict } from 'assert';

class SprkPaginationDocs extends Component {
  constructor(props) {
    super(props);
    this.doSomethingWhenChanged = this.doSomethingWhenChanged.bind(this);
    this.state = {
      tableData: stateData,
    }
  }

  doSomethingWhenChanged(args) {
    console.log(args);
    example1Props.currentPage = args.currentPage;
    // change the name of this func and update data
  }

  // let example1Props = {
  //   currentPage: 1,
  //   totalItems: stateData.length,
  //   itemsPerPage: 10
  // }


  // if i'm on page 2 with 10 items per page, page 1 is 0-9 and page 2 is 10-19

  render(){

    var showData = [];

    if (example1Props.currentPage === 1){
      var firstIndexToInclude = 0;
      var lastIndexToInclude = firstIndexToInclude + example1Props.itemsPerPage - 1;
    } else {
      var firstIndexToInclude = example1Props.itemsPerPage * (example1Props.currentPage - 1);
      var lastIndexToInclude = example1Props.currentPage * example1Props.itemsPerPage - 1;
    }


    console.log('firstIndex: ' + firstIndexToInclude);
    console.log('lastIndex: ' + lastIndexToInclude);

    for (var i = firstIndexToInclude; i <= lastIndexToInclude; i++){
      showData.push(this.state.tableData[i]);
    }

    console.log(showData);

    var rowsMap = showData.map(usState => {
      return (
        <tr key={'table_1_' + usState.abbreviation}>
          <td>{usState.state}</td>
          <td>{usState.abbreviation}</td>
          <td>{usState.capital}</td>
        </tr>
      );
    });

    return (
      <CentralColumnLayout>
        <ExampleContainer heading="Default Paginator">
          <div className="sprk-u-mbm">

            <table>
              <thead>
                <tr>
                  <td>State</td>
                  <td>Abbr.</td>
                  <td>Capital</td>
                </tr>
              </thead>
              <tbody>
                {rowsMap}
              </tbody>
            </table>

            <SprkPagination
              currentPage={example1Props.currentPage}
              totalItems={example1Props.totalItems}
              itemsPerPage={example1Props.itemsPerPage}
              callback={this.doSomethingWhenChanged}
            />
          </div>
        </ExampleContainer>
        <ExampleContainer heading="Long Paginator">
          <div className="sprk-u-mbm">
            {/* <SprkPagination paginationType="long"/> */}
          </div>
        </ExampleContainer>
        <ExampleContainer heading="Pager">
          <div className="sprk-u-mbm">
            {/* <SprkPagination paginationType="pager"/> */}
          </div>
        </ExampleContainer>
      </CentralColumnLayout>
    );
  }
};

const stateData = [
  {
    state: 'Alabama',
    abbreviation: 'AL',
    capital: 'Montgomery'
  },
  {
    state: 'Alaska',
    abbreviation: 'AK',
    capital: 'Juneau'
  },
  {
    state: 'Arizona',
    abbreviation: 'AZ',
    capital: 'Phoenix'
  },
  {
    state: 'Arkansas',
    abbreviation: 'AR',
    capital: 'Little Rock'
  },
  {
    state: 'California',
    abbreviation: 'CA',
    capital: 'Sacramento'
  },
  {
    state: 'Colorado',
    abbreviation: 'CO',
    capital: 'Denver'
  },
  {
    state: 'Connecticut',
    abbreviation: 'CT',
    capital: 'Hartford'
  },
  {
    state: 'Delaware',
    abbreviation: 'DE',
    capital: 'Dover'
  },
  {
    state: 'Florida',
    abbreviation: 'FL',
    capital: 'Tallahassee'
  },
  {
    state: 'Georgia',
    abbreviation: 'GA',
    capital: 'Atlanta'
  },
  {
    state: 'Hawaii',
    abbreviation: 'HI',
    capital: 'Honolulu'
  },
  {
    state: 'Idaho',
    abbreviation: 'ID',
    capital: 'Boise'
  },
  {
    state: 'Illinois',
    abbreviation: 'IL',
    capital: 'Springfield'
  },
  {
    state: 'Indiana',
    abbreviation: 'IN',
    capital: 'Indianapolis'
  },
  {
    state: 'Iowa',
    abbreviation: 'IA',
    capital: 'Des Moines'
  },
  {
    state: 'Kansas',
    abbreviation: 'KS',
    capital: 'Topeka'
  },
  {
    state: 'Kentucky',
    abbreviation: 'KY',
    capital: 'Frankfort'
  },
  {
    state: 'Louisiana',
    abbreviation: 'LA',
    capital: 'Baton Rouge'
  },
  {
    state: 'Maine',
    abbreviation: 'ME',
    capital: 'Augusta'
  },
  {
    state: 'Maryland',
    abbreviation: 'MD',
    capital: 'Annapolis'
  },
  {
    state: 'Massachusetts',
    abbreviation: 'MA',
    capital: 'Boston'
  },
  {
    state: 'Michigan',
    abbreviation: 'MI',
    capital: 'Detroit'
  },
  {
    state: 'Minnesota',
    abbreviation: 'MN',
    capital: 'St. Paul'
  },
  {
    state: 'Mississippi',
    abbreviation: 'MS',
    capital: 'Jackson'
  },
  {
    state: 'Missouri',
    abbreviation: 'MO',
    capital: 'Jefferson City'
  },
  {
    state: 'Montana',
    abbreviation: 'MT',
    capital: 'Helena'
  },
  {
    state: 'Nebraska',
    abbreviation: 'NE',
    capital: 'Lincoln'
  },
  {
    state: 'Nevada',
    abbreviation: 'NV',
    capital: 'Carson City'
  },
  {
    state: 'New Hampshire',
    abbreviation: 'NH',
    capital: 'Concord'
  },
  {
    state: 'New Jersey',
    abbreviation: 'NJ',
    capital: 'Trenton'
  },
  {
    state: 'New Mexico',
    abbreviation: 'NM',
    capital: 'Santa Fe'
  },
  {
    state: 'New York',
    abbreviation: 'NY',
    capital: 'Albany'
  },
  {
    state: 'North Carolina',
    abbreviation: 'NC',
    capital: 'Raleigh'
  },
  {
    state: 'North Dakota',
    abbreviation: 'ND',
    capital: 'Bismarck'
  },
  {
    state: 'Ohio',
    abbreviation: 'OH',
    capital: 'Columbus'
  },
  {
    state: 'Oklahoma',
    abbreviation: 'OK',
    capital: 'Oklahoma City'
  },
  {
    state: 'Oregon',
    abbreviation: 'OR',
    capital: 'Salem'
  },
  {
    state: 'Pennsylvania',
    abbreviation: 'PA',
    capital: 'Harrisburg'
  },
  {
    state: 'Rhode Island',
    abbreviation: 'RI',
    capital: 'Providence'
  },
  {
    state: 'South Carolina',
    abbreviation: 'SC',
    capital: 'Columbia'
  },
  {
    state: 'South Dakota',
    abbreviation: 'SD',
    capital: 'Pierre'
  },
  {
    state: 'Tennessee',
    abbreviation: 'TN',
    capital: 'Nashville'
  },
  {
    state: 'Texas',
    abbreviation: 'TX',
    capital: 'Austin'
  },
  {
    state: 'Utah',
    abbreviation: 'UT',
    capital: 'Salt Lake City'
  },
  {
    state: 'Vermont',
    abbreviation: 'VT',
    capital: 'Montpelier'
  },
  {
    state: 'Virginia',
    abbreviation: 'VA',
    capital: 'Richmond'
  },
  {
    state: 'Washington',
    abbreviation: 'WA',
    capital: 'Olympia'
  },
  {
    state: 'West Virginia',
    abbreviation: 'WV',
    capital: 'Charleston'
  },
  {
    state: 'Wisconsin',
    abbreviation: 'WI',
    capital: 'Madison'
  },
  {
    state: 'Wyoming',
    abbreviation: 'WY',
    capital: 'Cheyenne'
  }
]

let example1Props = {
  currentPage: 1,
  totalItems: stateData.length,
  itemsPerPage: 10
}

export default SprkPaginationDocs;
