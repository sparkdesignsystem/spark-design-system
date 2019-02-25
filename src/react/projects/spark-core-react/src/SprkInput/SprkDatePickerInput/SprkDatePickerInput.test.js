import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDatePickerInput from './SprkDatePickerInput';

Enzyme.configure({ adapter: new Adapter() });

it('should render an element with the correct class', () => {
  const wrapper = mount(<SprkDatePickerInput />);
  expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
});

it('should add classes when additionalClasses has a value', () => {
  const wrapper = mount(<SprkDatePickerInput additionalClasses="sprk-u-man" />);
  expect(wrapper.find('.sprk-u-man').length).toBe(1);
});

it('should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(<SprkDatePickerInput analyticsString="321" />);
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkDatePickerInput idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});
