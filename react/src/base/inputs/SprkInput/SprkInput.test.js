import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkInput from './SprkInput';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkInput:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkInput id="input-id" />);

    expect(wrapper.find('.sprk-b-TextInput').length).toBe(1);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(1);
    expect(wrapper.state().hasValue).toBe(false);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkInput additionalClasses="sprk-u-man" id="input-id" />,
    );

    expect(wrapper.find('.sprk-b-TextInput').hasClass('sprk-u-man')).toBe(true);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should add class when isValid is false', () => {
    const wrapper = mount(<SprkInput isValid={false} id="input-id" />);

    expect(
      wrapper.find('.sprk-b-TextInput').hasClass('sprk-b-TextInput--error'),
    ).toBe(true);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should not add error class when isValid is true', () => {
    const wrapper = mount(<SprkInput isValid id="input-id" />);

    expect(
      wrapper.find('.sprk-b-TextInput').hasClass('sprk-b-TextInput--error'),
    ).toBe(false);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkInput analyticsString="321" id="input-id" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString is not present`, () => {
    const wrapper = mount(<SprkInput id="input-id" />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkInput idString="321" id="input-id" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString is not present', () => {
    const wrapper = mount(<SprkInput id="input-id" />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should assign id when id has a value', () => {
    const wrapper = mount(<SprkInput id="321" />);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().getAttribute('id'),
    ).toBe('321');
  });

  it('should assign aria-describedby when ariaDescribedBy has a value', () => {
    const wrapper = mount(<SprkInput ariaDescribedBy="321" id="input-id" />);
    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('321');
  });

  it(`should not render aria-describedby
  when ariaDescribedBy is not present`, () => {
    const wrapper = mount(<SprkInput id="input-id" />);
    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe(null);
  });

  it(`should add floating label class
  to huge input when a value is present and blurred out`, () => {
    const wrapper = mount(<SprkInput variant="huge" id="input-id" />);
    const input = wrapper.find('input');
    input.value = 'foo';
    // on blur pass object into blur handler
    // Enzyme does not update state of the DOM
    // but we can simulate update to the DOM state by
    // passing same state into react function
    input.simulate('blur', { target: { value: 'foo' } });

    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .hasClass('sprk-b-Input--has-floating-label'),
    ).toBe(true);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(2);
    expect(wrapper.state().hasValue).toBe(true);
  });

  it(`should remove/not have floating label
  class to huge input when a value is not present and blurred out`, () => {
    const wrapper = mount(<SprkInput variant="huge" id="input-id" />);
    const input = wrapper.find('input');

    input.simulate('blur', { target: { value: '' } });

    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .hasClass('sprk-b-Input--has-floating-label'),
    ).toBe(false);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(1);
  });

  it('should add floating label class to huge text when there is value', () => {
    const wrapper = mount(
      <SprkInput value="value present" variant="huge" id="input-id" />,
    );
    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .hasClass('sprk-b-Input--has-floating-label'),
    ).toBe(true);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should run the supplied formatter when the value is changed', () => {
    const formatter = jest.fn();
    const wrapper = mount(
      <SprkInput
        type="text"
        formatter={formatter}
        value="test"
        id="input-id"
      />,
    );
    const input = wrapper.find('input');
    input.simulate('blur', { target: { value: 'testing' } });
    // Runs once on render, then the second call on change
    expect(formatter.mock.calls.length).toBe(2);
  });

  it('should not run the formatter if the field is invalid', () => {
    const formatter = jest.fn();
    mount(
      <SprkInput
        type="text"
        formatter={formatter}
        isValid={false}
        id="input-id"
      />,
    );
    expect(formatter.mock.calls.length).toBe(0);
  });

  it('should run the supplied onBlur function', () => {
    const onBlurMock = jest.fn();
    const wrapper = mount(<SprkInput onBlur={onBlurMock} />);
    const input = wrapper.find('input');

    input.simulate('blur', { target: { value: '' } });
    expect(onBlurMock.mock.calls.length).toBe(1);
  });

  it('should pass through additional attributes', () => {
    const wrapper = shallow(<SprkInput data-my-attr="testing" id="input-id" />);
    expect(wrapper.find('[data-my-attr="testing"]').length).toBe(1);
  });
});
