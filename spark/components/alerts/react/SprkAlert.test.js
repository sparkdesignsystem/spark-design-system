/* global it expect jest */
import React from 'react';
import SprkAlert from './SprkAlert';

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
  wrapper
    .find('button.sprk-c-Alert__icon.sprk-c-Alert__icon--dismiss')
    .simulate('click');
  expect(spyFunc.mock.calls.length).toBe(1);
});

it('should not run onDismiss when the dismiss button is clicked and onDismiss is empty', () => {
  const spyFunc = jest.fn();
  const wrapper = mount(<SprkAlert message="test" isVisible />);
  wrapper
    .find('button.sprk-c-Alert__icon.sprk-c-Alert__icon--dismiss')
    .simulate('click');
  expect(spyFunc.mock.calls.length).toBe(0);
});

it('should not render the alert is isVisible is false', () => {
  const wrapper = shallow(<SprkAlert message="test" />);
  expect(wrapper.find('div.sprk-c-Alert').length).toBe(0);
});

it('should display custom success icon when iconNameSuccess has value', () => {
  const wrapper = mount(
    <SprkAlert
      variant="success"
      message="test"
      isVisible
      iconNameSuccess="facebook"
    />,
  );
  expect(
    wrapper
      .find('svg.sprk-c-Alert__icon use')
      .getDOMNode()
      .getAttribute('xlink:href'),
  ).toBe('#facebook');
});

it('should display custom dismiss icon when iconNameDismiss has value', () => {
  const wrapper = mount(
    <SprkAlert
      variant="success"
      message="test"
      isVisible
      iconNameDismiss="instagram"
    />,
  );
  expect(
    wrapper
      .find('.sprk-c-Alert__icon--dismiss use')
      .getDOMNode()
      .getAttribute('xlink:href'),
  ).toBe('#instagram');
});

it('should display custom alert icon when iconNameInfo has value', () => {
  const wrapper = mount(
    <SprkAlert
      variant="info"
      message="test"
      isVisible
      iconNameInfo="twitter"
    />,
  );
  expect(
    wrapper
      .find('svg.sprk-c-Alert__icon use')
      .getDOMNode()
      .getAttribute('xlink:href'),
  ).toBe('#twitter');
});

it('should display custom alert icon when iconNameFail has value', () => {
  const wrapper = mount(
    <SprkAlert variant="fail" message="test" isVisible iconNameFail="camera" />,
  );
  expect(
    wrapper
      .find('svg.sprk-c-Alert__icon use')
      .getDOMNode()
      .getAttribute('xlink:href'),
  ).toBe('#camera');
});
