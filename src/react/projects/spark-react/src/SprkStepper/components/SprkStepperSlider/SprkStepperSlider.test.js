import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkStepperSlider from './SprkStepperSlider';

Enzyme.configure({ adapter: new Adapter() });

// Root Element Tests
it('should display a slider element with the correct base class', () => {
  const wrapper = shallow(<SprkStepperSlider />);
  expect(wrapper.find('li.sprk-c-Stepper__slider').length).toBe(1);
});
