import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTextInput from './SprkTextInput';
import SprkIcon from '../../SprkIcon/SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

it('should render an element with the correct class', () => {
  const wrapper = mount(<SprkTextInput />);
  expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
});

it('should render a huge text input with the correct class', () => {
  const wrapper = mount(<SprkTextInput type="hugeTextInput" />);
  expect(
    wrapper
      .find('.sprk-b-InputContainer')
      .hasClass('sprk-b-InputContainer--huge'),
  ).toBe(true);
  expect(
    wrapper.find('.sprk-b-Label').hasClass('sprk-u-ScreenReaderText'),
  ).toBe(true);
  expect(
    wrapper.find('.sprk-b-TextInput').hasClass('sprk-b-TextInput--huge'),
  ).toBe(true);
});

it('should add classes when additionalClasses has a value', () => {
  const wrapper = mount(<SprkTextInput additionalClasses="sprk-u-man" />);
  expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
});

it('should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(<SprkTextInput analyticsString="321" />);
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkTextInput idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});

it('should render an icon if leadingIcon is supplied', () => {
  const wrapper = mount(<SprkTextInput leadingIcon="calendar" />);
  expect(wrapper.find(SprkIcon).length).toBe(1);
});

it('should render a textarea is type is set to textarea', () => {
  const wrapper = mount(<SprkTextInput type="textarea" />);
  expect(wrapper.find('textarea.sprk-b-TextArea').length).toBe(1);
});

it('should run the supplied formatter', () => {
  const formatter = jest.fn(() => true);
  const onChangeMock = jest.fn();
  mount(
    <SprkTextInput type="text" formatter={formatter} onChange={onChangeMock} />,
  );
  expect(formatter.mock.calls.length).toBe(2);
});

it('should not run the formatter if the field is invalid', () => {
  const formatter = jest.fn();
  mount(<SprkTextInput type="text" formatter={formatter} valid={false} />);
  expect(formatter.mock.calls.length).toBe(0);
});

it('should run the supplied formatter (textarea)', () => {
  const formatter = jest.fn(() => true);
  const onChangeMock = jest.fn();
  mount(
    <SprkTextInput
      type="textarea"
      formatter={formatter}
      onChange={onChangeMock}
    />,
  );
  expect(formatter.mock.calls.length).toBe(2);
});

it('should not run the formatter if the field is invalid (textarea)', () => {
  const formatter = jest.fn();
  mount(<SprkTextInput type="textarea" formatter={formatter} valid={false} />);
  expect(formatter.mock.calls.length).toBe(0);
});

it('should render helper text if supplied', () => {
  const wrapper = mount(<SprkTextInput helperText="sample helper text" />);
  expect(wrapper.find('.sprk-b-HelperText').length).toBe(1);
});

it('should not render helper text if not supplied', () => {
  const wrapper = mount(<SprkTextInput helperText="" />);
  expect(wrapper.find('.sprk-b-HelperText').length).toBe(0);
});
