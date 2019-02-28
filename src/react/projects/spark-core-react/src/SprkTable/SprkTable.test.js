import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTable from './SprkTable';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkTable />);
  expect(wrapper.find('div.sprk-b-TableContainer').length).toBe(1);
});

it('should display a table element with the correct base class', () => {
  const wrapper = shallow(<SprkTable />);
  expect(wrapper.find('table.sprk-b-Table').length).toBe(1);
});

it('should display a table element with the correct classes if additionalTableClasses has a value', () => {
  const wrapper = shallow(<SprkTable additionalTableClasses="sprk-b-Table--secondary"/>);
  expect(wrapper.find('table').hasClass('sprk-b-Table')).toBe(true);
  expect(wrapper.find('table').hasClass('sprk-b-Table--secondary')).toBe(true);
});

it('should display a div element with the correct data-id if idString has a value', () => {
  const wrapper = shallow(<SprkTable idString="table-1"/>);
  expect(wrapper.find('div[data-id="table-1"]').length).toBe(1);
});

it('should display a div element with the correct classes if additionalClasses has a value', () => {
  const wrapper = shallow(<SprkTable additionalClasses="additionalClass" />);
  expect(wrapper.find('div').hasClass('sprk-b-TableContainer')).toBe(true);
  expect(wrapper.find('div').hasClass('additionalClass')).toBe(true);
});

it('should display a table element with the correct classes if the variant is secondary', () => {
  const wrapper = shallow(<SprkTable variant="secondary" />);
  expect(wrapper.find('table').hasClass('sprk-b-Table--secondary')).toBe(true);
})

it('should display a table element with the correct classes if the variant is grouped', () => {
  const wrapper = shallow(<SprkTable variant="grouped" />);
  expect(wrapper.find('table').hasClass('sprk-b-Table--grouped-columns')).toBe(true);
})

it('should display a table element with the correct classes if the variant is rowComparison', () => {
  const wrapper = shallow(<SprkTable variant="rowComparison" />);
  expect(wrapper.find('table').hasClass('sprk-b-Table--row-comparison')).toBe(true);
})

it('should display a table element with the correct classes if the variant is secondaryRowComparison', () => {
  const wrapper = shallow(<SprkTable variant="secondaryRowComparison" />);
  expect(wrapper.find('table').hasClass('sprk-b-Table--secondary-row-comparison')).toBe(true);
})

it('should display a thead element with the correct class if the variant is default', () => {
  const wrapper = shallow(<SprkTable variant='default' />);
  expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
})

it('should display a thead element with the correct class if the variant is secondary', () => {
  const wrapper = shallow(<SprkTable variant='secondary' />);
  expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
})

it('should display a thead element with the correct class if the variant is grouped', () => {
  const wrapper = shallow(<SprkTable variant='grouped' />);
  expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
})

it('should display a thead element with the correct class if the variant is rowComparison', () => {
  const wrapper = shallow(<SprkTable variant='rowComparison' />);
  expect(wrapper.find('thead').hasClass('sprk-b-Table__head')).toBe(true);
})

it('should display one tr element in the thead element if columns are present', () => {
  const wrapper = shallow(<SprkTable columns={[ {name:'data1', header: 'Header 1'}, {name:'data2', header: 'Header 2'}, {name:'data3', header: 'Header 3'} ]}/>);
  expect(wrapper.find('tr').length).toBe(1);
})

it('should display multiple tr elements in the thead element if columns are present and the variant is grouped', () => {
  const wrapper = shallow(<SprkTable variant="grouped" columns={[ [{name: 'column1', header: 'Column Heading', rowspan: 2}, {name: 'column2', header: 'Column Heading', colspan: 3}, {name: 'column3', header: 'Column Heading', rowspan: 2}], [{name: 'subheading1', header: 'SubHeading'}, {name: 'subheading2', header: 'SubHeading'}, {name: 'subheading3', header: 'Subheading'}] ]} />);
  expect(wrapper.find('tr').length).toBe(2);
})

it('should display a tbody element', () => {
  const wrapper = shallow(<SprkTable />);
  expect(wrapper.find('tbody').length).toBe(1);
})

it('should display a th with the correct class when the variant is rowComparison', () => {
  const wrapper = shallow(<SprkTable variant='rowComparison'/>);
  expect(wrapper.find('th.sprk-b-Table__empty-heading').length).toBe(1);
})