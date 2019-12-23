import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkSpinner from './SprkSpinner';

Enzyme.configure({ adapter: new Adapter() });

it('SprkSpinner: Should display a div with the correct base class', () => {
  const wrapper = shallow(<SprkSpinner />);
  expect(wrapper.find('div.sprk-c-Spinner').length).toBe(1);
});

it('SprkSpinner: Should display the correct class if the size prop is set to large', () => {
  const wrapper = shallow(<SprkSpinner size="large" />);
  expect(wrapper.find('.sprk-c-Spinner').hasClass('sprk-c-Spinner--large')).toBe(true);
});

it('SprkSpinner: Should display the correct class if the lightness prop is set to dark', () => {
  const wrapper = shallow(<SprkSpinner lightness="dark" />);
  expect(wrapper.find('.sprk-c-Spinner').hasClass('sprk-c-Spinner--dark')).toBe(true);
});

it('SprkSpinner: Should apply any unknown props as attributes on the element', () => {
  const wrapper = shallow(<SprkSpinner aria-labelledby="label-1" />);
  expect(wrapper.find('[aria-labelledby="label-1"]').length).toBe(1);
});
