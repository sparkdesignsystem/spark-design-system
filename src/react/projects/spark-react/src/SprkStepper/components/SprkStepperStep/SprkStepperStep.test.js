import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../windowStubs';
import SprkStepperStep from './SprkStepperStep';

Enzyme.configure({ adapter: new Adapter() });

// Root Element Tests
it('should display a stepperitem element with the correct base class', () => {
  const wrapper = shallow(<SprkStepperStep />);
  expect(wrapper.find('li.sprk-c-Stepper__step').length).toBe(1);
});

it('should correctly apply the title property', () => {
  const expected = 'expected_title';
  const wrapper = mount(<SprkStepperStep title={expected} />);

  const actual = wrapper.find('h3.sprk-c-Stepper__step-heading').text();

  expect(actual).toBe(expected);
});

it('should correctly apply additional classes', () => {
  const expected = 'expected_class';
  const wrapper = mount(<SprkStepperStep additionalClasses={expected} />);

  expect(wrapper.find('li.sprk-c-Stepper__step').hasClass(expected)).toBe(true);
});

it('should correctly apply idString', () => {
  const expected = 'I am an id string';
  const wrapper = mount(<SprkStepperStep idString={expected} />);
  const node = wrapper.find('li.sprk-c-Stepper__step');

  expect(node.getDOMNode().attributes.getNamedItem('data-id').value).toEqual(
    expected,
  );
});

it('should correctly apply analyticsString', () => {
  const expected = 'I am an analytics string';
  const wrapper = mount(<SprkStepperStep analyticsString={expected} />);
  const node = wrapper.find('li.sprk-c-Stepper__step');

  expect(
    node.getDOMNode().attributes.getNamedItem('data-analytics').value,
  ).toEqual(expected);
});

it('should have the correct structure for hasDescription', () => {
  const expected = 'sprk-c-Stepper__step-content--has-description';
  const wrapper = mount(<SprkStepperStep hasDescription={true} />);
  const contentDiv = wrapper.find('div.sprk-c-Stepper__step-content');

  expect(contentDiv.hasClass(expected)).toBe(true);
});

it('should correctly hide selected description (covered by slider)', () => {
  const expected = 'sprk-u-Visibility--hidden';
  const wrapper = mount(<SprkStepperStep hasDescription={true} isSelected={true} />);
  const contentDiv = wrapper.find('h3.sprk-c-Stepper__step-heading');

  expect(contentDiv.hasClass(expected)).toBe(true);
});