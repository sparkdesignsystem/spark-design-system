import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRevealInput from './SprkRevealInput';

Enzyme.configure({ adapter: new Adapter() });

it('should render an element with the correct class', () => {
  const wrapper = mount(<SprkRevealInput />);
  expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
});

it('should add classes when additionalClasses has a value', () => {
  const wrapper = mount(<SprkRevealInput additionalClasses="sprk-u-man" />);
  expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
});

it('should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(<SprkRevealInput analyticsString="321" />);
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkRevealInput idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});
