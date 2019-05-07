import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkStepperItem from './SprkStepperItem';

Enzyme.configure({ adapter: new Adapter() });

// Root Element Tests
it('should display a stepperitem element with the correct base class', () => {
  const wrapper = shallow(<SprkStepperItem />);
  expect(wrapper.find('li.sprk-c-Stepper__step').length).toBe(1);
});

it ('should correctly apply the title property', () => {
  const expected = 'expected_title'
  const wrapper = mount(<SprkStepperItem title={ expected } />);

  const actual = wrapper.find('h3.sprk-c-Stepper__step-heading').text();

  expect(actual).toBe(expected);
});