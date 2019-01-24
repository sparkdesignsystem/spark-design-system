import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkOrderedList from './SprkOrderedList';

Enzyme.configure({ adapter: new Adapter() });

it('should display a ol element with the correct base class', () => {
  const wrapper = shallow(<SprkOrderedList/>);
  expect(wrapper.find('ol.sprk-b-List').length).toBe(1);
});

it('should display a ol element with correct classes when listType is indented', () => {
  const wrapper = shallow(<SprkOrderedList listType="indented" />);
  expect(wrapper.find('ol').hasClass('sprk-b-List')).toBe(true);
  expect(wrapper.find('ol').hasClass('sprk-b-List--indented')).toBe(true);
});