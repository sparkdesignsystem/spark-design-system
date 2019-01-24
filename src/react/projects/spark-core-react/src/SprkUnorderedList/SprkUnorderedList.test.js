import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkUnorderedList from './SprkUnorderedList';

Enzyme.configure({ adapter: new Adapter() });

it('should display a ul element with the correct base class', () => {
  const wrapper = shallow(<SprkUnorderedList/>);
  expect(wrapper.find('ul.sprk-b-List').length).toBe(1);
});

it('should display a ul element with correct classes when listType is indented', () => {
  const wrapper = shallow(<SprkUnorderedList listType="indented" />);
  expect(wrapper.find('ul').hasClass('sprk-b-List')).toBe(true);
  expect(wrapper.find('ul').hasClass('sprk-b-List--indented')).toBe(true);
});

it('should display a ul element with correct classes when listType is bare', () => {
  const wrapper = shallow(<SprkUnorderedList listType="bare" />);
  expect(wrapper.find('ul').hasClass('sprk-b-List')).toBe(true);
  expect(wrapper.find('ul').hasClass('sprk-b-List--bare')).toBe(true);
});