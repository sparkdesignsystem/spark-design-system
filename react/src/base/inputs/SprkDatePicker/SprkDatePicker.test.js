import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDatePicker from './SprkDatePicker';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkDatePicker:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkDatePicker />);

    expect(wrapper.find('.sprk-b-TextInput').length).toBe(1);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(1);
    expect(wrapper.state().hasValue).toBe(false);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(<SprkDatePicker additionalClasses="sprk-u-man" />);

    expect(wrapper.find('.sprk-b-TextInput').hasClass('sprk-u-man')).toBe(true);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should add class when isValid is false', () => {
    const wrapper = mount(<SprkDatePicker isValid={false} />);

    expect(
      wrapper.find('.sprk-b-TextInput').hasClass('sprk-b-TextInput--error'),
    ).toBe(true);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkDatePicker analyticsString="321" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
    analyticsString has no value`, () => {
    const wrapper = mount(<SprkDatePicker />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkDatePicker idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString has no value', () => {
    const wrapper = mount(<SprkDatePicker />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should assign id when id has a value', () => {
    const wrapper = mount(<SprkDatePicker id="321" />);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().getAttribute('id'),
    ).toBe('321');
  });

  it('should assign default id when id has no value', () => {
    const wrapper = mount(<SprkDatePicker />);
    expect(
      wrapper.find('.sprk-b-TextInput').getDOMNode().getAttribute('id'),
    ).toContain('sprk-datepicker-');
  });

  it('should assign aria-describedby when ariaDescribedBy has a value', () => {
    const wrapper = mount(<SprkDatePicker ariaDescribedBy="321" />);
    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('321');
  });

  it(`should not render aria-describedby when
    ariaDescribedBy has no value`, () => {
    const wrapper = mount(<SprkDatePicker />);
    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe(null);
  });

  it(`should add floating label class
  to huge input when a value is present and blurred out`, () => {
    const wrapper = mount(<SprkDatePicker variant="huge" />);
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
    expect(wrapper.state().hasValue).toBe(true);
  });

  it(`should remove/not have floating label
  class to huge input when a value is not present and blurred out`, () => {
    const wrapper = mount(<SprkDatePicker variant="huge" />);
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
      <SprkDatePicker value="value present" variant="huge" />,
    );
    expect(
      wrapper
        .find('.sprk-b-TextInput')
        .hasClass('sprk-b-Input--has-floating-label'),
    ).toBe(true);
  });

  it('should run the supplied formatter', () => {
    const formatter = jest.fn(() => true);
    const onChangeMock = jest.fn();
    mount(
      <SprkDatePicker
        type="text"
        formatter={formatter}
        onChange={onChangeMock}
      />,
    );
    expect(formatter.mock.calls.length).toBe(1);
  });

  it('should not run the formatter if the field is invalid', () => {
    const formatter = jest.fn();
    mount(<SprkDatePicker type="text" formatter={formatter} isValid={false} />);
    expect(formatter.mock.calls.length).toBe(0);
  });

  it(`format function should format the date to 2
  day month and year by default`, () => {
    const wrapper = mount(<SprkDatePicker />);
    const date = new Date('December 17, 1995 03:24:00');
    expect(wrapper.find(SprkDatePicker).instance().tdpConfig.format(date)).toBe(
      '12/17/1995',
    );
  });
});
