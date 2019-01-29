import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkHighlightBoard from './SprkHighlightBoard';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkHighlightBoard />);
  expect(wrapper.find('div.sprk-c-HighlightBoard').length).toBe(1);
});