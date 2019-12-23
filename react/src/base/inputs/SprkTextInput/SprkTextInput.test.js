import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTextInput from './SprkTextInput';
import SprkIcon from '../../../components/icons/SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

it('SprkTextInput: Should render an element with the correct class', () => {
  const wrapper = mount(<SprkTextInput />);
  expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
});

it('SprkTextInput: Should render a huge text input with the correct class', () => {
  const wrapper = mount(<SprkTextInput type="hugeTextInput" />);
  expect(
    wrapper
      .find('.sprk-b-InputContainer')
      .hasClass('sprk-b-InputContainer--huge'),
  ).toBe(true);
});

it('SprkTextInput: Should add floating label class to huge input when a value is present and blurred out', () => {
  const wrapper = mount(<SprkTextInput type="hugeTextInput" />);
  const input = wrapper.find('input');
  input.value = 'foo';
  // on blur pass object into blur handler
  // Enzyme does not update state of the DOM but we can simulate update to the DOM state by passing same state into react function
  input.simulate('blur', { target: { value: 'foo' } });

  expect(
    wrapper
      .find('.sprk-b-TextInput')
      .hasClass('sprk-b-Input--has-floating-label'),
  ).toBe(true);
});

it('SprkTextInput: Should remove/not have floating label class to huge input when a value is not present and blurred out', () => {
  const wrapper = mount(<SprkTextInput type="hugeTextInput" />);
  const input = wrapper.find('input');

  input.simulate('blur', { target: { value: '' } });

  expect(
    wrapper
      .find('.sprk-b-TextInput')
      .hasClass('sprk-b-Input--has-floating-label'),
  ).toBe(false);
});

it('SprkTextInput: Should add floating label class to huge text when there is value', () => {
  const wrapper = mount(
    <SprkTextInput
      value="value present"
      type="hugeTextInput"
      onChange={() => {}}
    />,
  );
  expect(
    wrapper
      .find('.sprk-b-TextInput')
      .hasClass('sprk-b-Input--has-floating-label'),
  ).toBe(true);
});

it('SprkTextInput: Should add floating label class to huge text when there is defaultValue', () => {
  const wrapper = mount(
    <SprkTextInput
      defaultValue="default Value"
      type="hugeTextInput"
    />,
  );
  expect(
    wrapper
      .find('.sprk-b-TextInput')
      .hasClass('sprk-b-Input--has-floating-label'),
  ).toBe(true);
});

it('SprkTextInput: Should add classes when additionalClasses has a value', () => {
  const wrapper = mount(<SprkTextInput additionalClasses="sprk-u-man" />);
  expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
});

it('SprkTextInput: Should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(<SprkTextInput analyticsString="321" />);
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('SprkTextInput: Should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkTextInput idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});

it('SprkTextInput: Should render an icon if leadingIcon is supplied', () => {
  const wrapper = mount(<SprkTextInput leadingIcon="calendar" />);
  expect(wrapper.find(SprkIcon).length).toBe(1);
});

it('SprkTextInput: Should render a textarea is type is set to textarea', () => {
  const wrapper = mount(<SprkTextInput type="textarea" />);
  expect(wrapper.find('textarea.sprk-b-TextArea').length).toBe(1);
});

it('SprkTextInput: Should run the supplied formatter', () => {
  const formatter = jest.fn(() => true);
  const onChangeMock = jest.fn();
  mount(
    <SprkTextInput type="text" formatter={formatter} onChange={onChangeMock} />,
  );
  expect(formatter.mock.calls.length).toBe(2);
});

it('SprkTextInput: Should not run the formatter if the field is invalid', () => {
  const formatter = jest.fn();
  mount(<SprkTextInput type="text" formatter={formatter} valid={false} />);
  expect(formatter.mock.calls.length).toBe(0);
});

it('SprkTextInput: Should run the supplied formatter (textarea)', () => {
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

it('SprkTextInput: Should not run the formatter if the field is invalid (textarea)', () => {
  const formatter = jest.fn();
  mount(<SprkTextInput type="textarea" formatter={formatter} valid={false} />);
  expect(formatter.mock.calls.length).toBe(0);
});

it('SprkTextInput: Should render helper text if supplied', () => {
  const wrapper = mount(<SprkTextInput helperText="sample helper text" />);
  expect(wrapper.find('.sprk-b-HelperText').length).toBe(1);
});

it('SprkTextInput: Should not render helper text if not supplied', () => {
  const wrapper = mount(<SprkTextInput helperText="" />);
  expect(wrapper.find('.sprk-b-HelperText').length).toBe(0);
});
