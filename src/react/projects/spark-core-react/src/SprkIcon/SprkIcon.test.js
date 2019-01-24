import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkIcon from './SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

it('should display an svg element with the correct base class', () => {
  const wrapper = shallow(<SprkIcon/>);
  expect(wrapper.find('svg.sprk-c-Icon').length).toBe(1);
});

it('should add classes when additionalClasses has a value', () => {
  const wrapper = shallow(<SprkIcon additionalClasses="sprk-c-Icon--l" />);
  expect(wrapper.find('svg.sprk-c-Icon--l').length).toBe(1);
});