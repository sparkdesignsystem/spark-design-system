import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMasthead from './SprkMasthead';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkMasthead />);
  expect(wrapper.find('header.sprk-c-Masthead').length).toBe(1);
});

it('should add classes if additionalClasses has a value', () => {
  const wrapper = shallow(<SprkMasthead additionalClasses="sprk-u-man" />);
  expect(wrapper.find('header.sprk-u-man').length).toBe(1);
})

it('should add data-analytics if analyticsString has a value', () => {
  const wrapper = shallow(<SprkMasthead analyticsString="masthead-1" />);
  expect(wrapper.find('header[data-analytics="masthead-1"]').length).toBe(1);
})

it('should add data-id if idString has a value', () => {
  const wrapper = shallow(<SprkMasthead idString="masthead-1" />);
  expect(wrapper.find('header[data-id="masthead-1"]').length).toBe(1);
})

it('should add classes to body and html when the mobile nav is opened', () => {
  const wrapper = shallow(<SprkMasthead idString="masthead-1" />);
});
