import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadBigNav from './SprkMastheadBigNav';

Enzyme.configure({ adapter: new Adapter() });

it('should display an element with the correct class', () => {
  const wrapper = shallow(<SprkMastheadBigNav/>);
  expect(wrapper.find('.sprk-c-Masthead__big-nav').length).toBe(1);
});