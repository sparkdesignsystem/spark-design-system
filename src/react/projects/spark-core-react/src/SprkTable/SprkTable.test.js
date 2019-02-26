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