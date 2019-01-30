import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadLittleNav from './SprkMastheadLittleNav';

Enzyme.configure({ adapter: new Adapter() });

it('should render an element with the correct class', () => {
  const wrapper = mount(<SprkMastheadLittleNav />);
  expect(wrapper.find('.sprk-c-Masthead__little-nav').length).toBe(1);
});