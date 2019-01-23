import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMasthead from './SprkMasthead';

Enzyme.configure({ adapter: new Adapter() });

it('should display a link element with the correct base class', () => {
  const wrapper = shallow(<SprkMasthead/>);
  expect(wrapper.find('div.sprk-c-Masthead').length).toBe(1);
});