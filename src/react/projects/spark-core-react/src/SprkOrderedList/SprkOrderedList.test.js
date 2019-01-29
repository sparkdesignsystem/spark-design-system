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

it('should add classes to ol element if additionalClasses has a value', () => {
  const wrapper = shallow(<SprkOrderedList additionalClasses="additionalClass" />);
  expect(wrapper.find('ol').hasClass('sprk-b-List')).toBe(true);
  expect(wrapper.find('ol').hasClass('additionalClass')).toBe(true);
});

it('should add data-id to ol element if idString has a value', () => {
  const wrapper = shallow(<SprkOrderedList idString="orderedlist-1" />);
  expect(wrapper.find('ol[data-id="orderedlist-1"]').length).toBe(1);
});