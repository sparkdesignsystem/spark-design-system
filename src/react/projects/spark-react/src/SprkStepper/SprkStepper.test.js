import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../windowStubs';
import SprkStepper from './SprkStepper';

Enzyme.configure({ adapter: new Adapter() });

// Root Element Tests
it('should display a stepper element with the correct base class', () => {
  const wrapper = shallow(<SprkStepper />);
  expect(wrapper.find('ol.sprk-c-Stepper').length).toBe(1);
});

it('should correctly apply additional classes', () => {
  const expected = 'expected_class'
  const wrapper = mount(<SprkStepper additionalClasses={expected} />);

  expect(wrapper.find('ol.sprk-c-Stepper').hasClass(expected)).toBe(true);
});

it('should correctly apply idString', () => {
  const expected = 'I am an id string';
  const wrapper = mount(<SprkStepper idString={expected} />);
  const node = wrapper.find('ol.sprk-c-Stepper');

  expect(node.getDOMNode().attributes.getNamedItem('data-id').value).toEqual(
    expected,
  );
});
