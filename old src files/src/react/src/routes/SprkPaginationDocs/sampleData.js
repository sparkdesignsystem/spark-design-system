// Sample data used in the Pagination docs
const shipData = [
  {
    name: 'Serenity',
    type: 'Firefly',
    source: 'Firefly',
  },
  {
    name: 'Rocinante',
    type: 'Martian Corvette',
    source: 'The Expanse',
  },
  {
    name: 'Galactica',
    type: 'Battlestar',
    source: 'Battlestar Galactica',
  },
  {
    name: 'Millenium Falcon',
    type: 'Corellian Light Freighter',
    source: 'Star Wars',
  },
  {
    name: 'Enterprise',
    type: 'Constitution Class',
    source: 'Star Trek',
  },
  {
    name: 'Planet Express Ship',
    type: 'Delivery',
    source: 'Futurama',
  },
  {
    name: 'T.A.R.D.I.S.',
    type: 'Time Machine/Spacecraft',
    source: 'Doctor Who',
  },
  {
    name: 'Challenger',
    type: 'Orbiter Vehicle',
    source: 'Reality',
  },
  {
    name: 'Nostromo',
    type: 'Weyland-Yutani Commercial Hauler',
    source: 'Alien',
  },
];

const stateData = [
  {
    state: 'Alabama',
    abbreviation: 'AL',
    capital: 'Montgomery',
  },
  {
    state: 'Alaska',
    abbreviation: 'AK',
    capital: 'Juneau',
  },
  {
    state: 'Arizona',
    abbreviation: 'AZ',
    capital: 'Phoenix',
  },
  {
    state: 'Arkansas',
    abbreviation: 'AR',
    capital: 'Little Rock',
  },
  {
    state: 'California',
    abbreviation: 'CA',
    capital: 'Sacramento',
  },
  {
    state: 'Colorado',
    abbreviation: 'CO',
    capital: 'Denver',
  },
  {
    state: 'Connecticut',
    abbreviation: 'CT',
    capital: 'Hartford',
  },
  {
    state: 'Delaware',
    abbreviation: 'DE',
    capital: 'Dover',
  },
  {
    state: 'Florida',
    abbreviation: 'FL',
    capital: 'Tallahassee',
  },
  {
    state: 'Georgia',
    abbreviation: 'GA',
    capital: 'Atlanta',
  },
  {
    state: 'Hawaii',
    abbreviation: 'HI',
    capital: 'Honolulu',
  },
  {
    state: 'Idaho',
    abbreviation: 'ID',
    capital: 'Boise',
  },
  {
    state: 'Illinois',
    abbreviation: 'IL',
    capital: 'Springfield',
  },
  {
    state: 'Indiana',
    abbreviation: 'IN',
    capital: 'Indianapolis',
  },
  {
    state: 'Iowa',
    abbreviation: 'IA',
    capital: 'Des Moines',
  },
  {
    state: 'Kansas',
    abbreviation: 'KS',
    capital: 'Topeka',
  },
  {
    state: 'Kentucky',
    abbreviation: 'KY',
    capital: 'Frankfort',
  },
  {
    state: 'Louisiana',
    abbreviation: 'LA',
    capital: 'Baton Rouge',
  },
  {
    state: 'Maine',
    abbreviation: 'ME',
    capital: 'Augusta',
  },
  {
    state: 'Maryland',
    abbreviation: 'MD',
    capital: 'Annapolis',
  },
  {
    state: 'Massachusetts',
    abbreviation: 'MA',
    capital: 'Boston',
  },
  {
    state: 'Michigan',
    abbreviation: 'MI',
    capital: 'Detroit',
  },
  {
    state: 'Minnesota',
    abbreviation: 'MN',
    capital: 'St. Paul',
  },
  {
    state: 'Mississippi',
    abbreviation: 'MS',
    capital: 'Jackson',
  },
  {
    state: 'Missouri',
    abbreviation: 'MO',
    capital: 'Jefferson City',
  },
  {
    state: 'Montana',
    abbreviation: 'MT',
    capital: 'Helena',
  },
  {
    state: 'Nebraska',
    abbreviation: 'NE',
    capital: 'Lincoln',
  },
  {
    state: 'Nevada',
    abbreviation: 'NV',
    capital: 'Carson City',
  },
  {
    state: 'New Hampshire',
    abbreviation: 'NH',
    capital: 'Concord',
  },
  {
    state: 'New Jersey',
    abbreviation: 'NJ',
    capital: 'Trenton',
  },
  {
    state: 'New Mexico',
    abbreviation: 'NM',
    capital: 'Santa Fe',
  },
  {
    state: 'New York',
    abbreviation: 'NY',
    capital: 'Albany',
  },
  {
    state: 'North Carolina',
    abbreviation: 'NC',
    capital: 'Raleigh',
  },
  {
    state: 'North Dakota',
    abbreviation: 'ND',
    capital: 'Bismarck',
  },
  {
    state: 'Ohio',
    abbreviation: 'OH',
    capital: 'Columbus',
  },
  {
    state: 'Oklahoma',
    abbreviation: 'OK',
    capital: 'Oklahoma City',
  },
  {
    state: 'Oregon',
    abbreviation: 'OR',
    capital: 'Salem',
  },
  {
    state: 'Pennsylvania',
    abbreviation: 'PA',
    capital: 'Harrisburg',
  },
  {
    state: 'Rhode Island',
    abbreviation: 'RI',
    capital: 'Providence',
  },
  {
    state: 'South Carolina',
    abbreviation: 'SC',
    capital: 'Columbia',
  },
  {
    state: 'South Dakota',
    abbreviation: 'SD',
    capital: 'Pierre',
  },
  {
    state: 'Tennessee',
    abbreviation: 'TN',
    capital: 'Nashville',
  },
  {
    state: 'Texas',
    abbreviation: 'TX',
    capital: 'Austin',
  },
  {
    state: 'Utah',
    abbreviation: 'UT',
    capital: 'Salt Lake City',
  },
  {
    state: 'Vermont',
    abbreviation: 'VT',
    capital: 'Montpelier',
  },
  {
    state: 'Virginia',
    abbreviation: 'VA',
    capital: 'Richmond',
  },
  {
    state: 'Washington',
    abbreviation: 'WA',
    capital: 'Olympia',
  },
  {
    state: 'West Virginia',
    abbreviation: 'WV',
    capital: 'Charleston',
  },
  {
    state: 'Wisconsin',
    abbreviation: 'WI',
    capital: 'Madison',
  },
  {
    state: 'Wyoming',
    abbreviation: 'WY',
    capital: 'Cheyenne',
  },
  {
    state: 'Puerto Rico',
    abbreviation: 'PR',
    capital: 'San Juan',
  },
];

const datasets = {
  shipData,
  stateData,
};

export default datasets;
