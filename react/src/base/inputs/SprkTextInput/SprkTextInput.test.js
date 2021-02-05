import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTextInput from './SprkTextInput';
import SprkIcon from '../../../components/icons/SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTextInput:', () => {
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
  });

  it(`should add floating label class to huge input when a value is present
    and blurred out`, () => {
    const wrapper = mount(<SprkTextInput type="hugeTextInput" />);
    const input = wrapper.find('input');
    input.value = 'foo';
    // on blur pass object into blur handler
    // Enzyme does not update state of the DOM but we can simulate update to
    // the DOM state by passing same state into react function
    input.simulate('blur', { target: { value: 'foo' } });

    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .hasClass('sprk-b-Input--has-floating-label'),
    ).toBe(true);
  });

  it(`should remove/not have floating label class to huge input when a value
    is not present and blurred out`, () => {
    const wrapper = mount(<SprkTextInput type="hugeTextInput" />);
    const input = wrapper.find('input');

    input.simulate('blur', { target: { value: '' } });

    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .hasClass('sprk-b-Input--has-floating-label'),
    ).toBe(false);
  });

  it('should add floating label class to huge text when there is value', () => {
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

  it(`should add floating label class to huge text when there is
    defaultValue`, () => {
    const wrapper = mount(
      <SprkTextInput defaultValue="default Value" type="hugeTextInput" />,
    );
    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .hasClass('sprk-b-Input--has-floating-label'),
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
      <SprkTextInput
        type="text"
        formatter={formatter}
        onChange={onChangeMock}
      />,
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
    mount(
      <SprkTextInput type="textarea" formatter={formatter} valid={false} />,
    );
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

  it(`should have aria-describedby if the field is invalid and
    ariaDescribedBy is not provided`, () => {
    const wrapper = mount(<SprkTextInput valid={false} />);
    expect(wrapper.find('[aria-describedby]').length).toBe(1);
  });

  it(`should not have aria-describedby if the field is valid and
    ariaDescribedBy is not provided`, () => {
    const wrapper = mount(<SprkTextInput />);
    expect(wrapper.find('[aria-describedby]').length).toBe(0);
  });

  it('should add ariaDescribedBy to aria-describedby', () => {
    const wrapper = mount(<SprkTextInput ariaDescribedBy="my ids" />);
    expect(wrapper.find('[aria-describedby="my ids"]').length).toBe(1);
  });

  it('should merge errorContainerId and ariaDescribedBy', () => {
    const wrapper = mount(
      <SprkTextInput
        errorContainerId="errorId"
        ariaDescribedBy="id1 id2"
        valid={false}
      />,
    );
    const input = wrapper.find('input');
    expect(input.length).toBe(1);
    expect(input.getDOMNode().getAttribute('aria-describedby')).toEqual(
      'errorId id1 id2',
    );
  });

  it('should respond to updates to errorContainerId or ariaDescribedBy', () => {
    const wrapper = mount(
      <SprkTextInput
        errorContainerId="errorId"
        ariaDescribedBy="id1 id2"
        valid={false}
      />,
    );

    const input = wrapper.find('input');
    expect(input.length).toBe(1);
    expect(input.getDOMNode().getAttribute('aria-describedby')).toEqual(
      'errorId id1 id2',
    );

    wrapper.setProps({ errorContainerId: 'error2' });
    expect(input.getDOMNode().getAttribute('aria-describedby')).toEqual(
      'error2 id1 id2',
    );
  });
});
