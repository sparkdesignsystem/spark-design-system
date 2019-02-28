/* global it expect jest */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAlert from './SprkAlert';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkAlert message="test" isVisible />);
  expect(wrapper.find('div.sprk-c-Alert').length).toBe(1);
});

it('should display a div element with correct classes when variant is info', () => {
  const wrapper = shallow(<SprkAlert variant="info" message="test" isVisible />);
  expect(wrapper.find('div.sprk-c-Alert').hasClass('sprk-c-Alert--info')).toBe(true);
});

it('should display a div element with correct classes when variant is success', () => {
  const wrapper = shallow(<SprkAlert variant="success" message="test" isVisible />);
  expect(wrapper.find('div.sprk-c-Alert').hasClass('sprk-c-Alert--success')).toBe(true);
});

it('should display a div element with correct classes when variant is fail', () => {
  const wrapper = shallow(<SprkAlert variant="fail" message="test" isVisible />);
  expect(wrapper.find('div.sprk-c-Alert').hasClass('sprk-c-Alert--fail')).toBe(true);
});

it('should hide the dismiss button when isDismissible is set to false', () => {
  const wrapper = shallow(<SprkAlert isDismissible={false} message="test" isVisible />);
  expect(wrapper.find('div.sprk-c-Alert').hasClass('sprk-c-Alert')).toBe(true);
  expect(wrapper.find('button.sprk-c-Alert__icon.sprk-c-Alert__icon--dismiss').length).toBe(0);
});

it('should run onDismiss when the dismiss button is clicked', () => {
  const spyFunc = jest.fn();
  const wrapper = mount(<SprkAlert message="test" isVisible onDismiss={spyFunc} />);
  wrapper.find('button.sprk-c-Alert__icon.sprk-c-Alert__icon--dismiss').simulate('click');
  expect(spyFunc.mock.calls.length).toBe(1);
});

it('should not run onDismiss when the dismiss button is clicked and onDismiss is empty', () => {
  const spyFunc = jest.fn();
  const wrapper = mount(<SprkAlert message="test" isVisible />);
  wrapper.find('button.sprk-c-Alert__icon.sprk-c-Alert__icon--dismiss').simulate('click');
  expect(spyFunc.mock.calls.length).toBe(0);
});

it('should not render the alert is isVisible is false', () => {
  const wrapper = shallow(<SprkAlert message="test" />);
  expect(wrapper.find('div.sprk-c-Alert').length).toBe(0);
});
