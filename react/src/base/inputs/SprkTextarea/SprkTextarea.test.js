import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTextarea from './SprkTextarea';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTextarea:', () => {
  it('should render a textarea with the correct class', () => {
    const wrapper = mount(<SprkTextarea id="textarea-id" />);
    expect(wrapper.find('.sprk-b-TextArea').length).toBe(1);
    expect(wrapper.find('.sprk-b-TextArea').getDOMNode().classList.length).toBe(
      1,
    );
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkTextarea additionalClasses="sprk-u-mbm" id="textarea-id" />,
    );
    expect(wrapper.find('.sprk-u-mbm').length).toBe(1);
    expect(wrapper.find('.sprk-b-TextArea').getDOMNode().classList.length).toBe(
      2,
    );
  });

  it('should add error class when isValid is false', () => {
    const wrapper = mount(<SprkTextarea isValid={false} id="textarea-id" />);
    expect(wrapper.find('.sprk-b-TextArea--error').length).toBe(1);
    expect(wrapper.find('.sprk-b-TextArea').getDOMNode().classList.length).toBe(
      2,
    );
  });

  it('should not add error class when isValid is true', () => {
    const wrapper = mount(<SprkTextarea isValid id="textarea-id" />);
    expect(wrapper.find('.sprk-b-TextArea--error').length).toBe(0);
    expect(wrapper.find('.sprk-b-TextArea').getDOMNode().classList.length).toBe(
      1,
    );
  });

  it('should add disabled attribute when isDisabled is true', () => {
    const wrapper = mount(<SprkTextarea isDisabled id="textarea-id" />);
    expect(wrapper.find('textarea[disabled]').length).toBe(1);
  });

  it('should not add disabled attribute when isDisabled is false', () => {
    const wrapper = mount(<SprkTextarea isDisabled={false} id="textarea-id" />);
    expect(wrapper.find('textarea').getDOMNode().getAttribute('disabled')).toBe(
      null,
    );
  });

  it('should set aria-invalid attribute to true when isValid is false', () => {
    const wrapper = mount(<SprkTextarea isValid={false} id="textarea-id" />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-invalid'),
    ).toBe('true');
  });

  it('should not set aria-invalid attr to false when isValid is true', () => {
    const wrapper = mount(<SprkTextarea isValid id="textarea-id" />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-invalid'),
    ).toBe('false');
  });

  it('should set aria-describedby attribute if value provided', () => {
    const wrapper = mount(
      <SprkTextarea ariaDescribedBy="error-id" id="textarea-id" />,
    );
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-describedby'),
    ).toBe('error-id');
  });

  it('should not set aria-describedby attr if not provided', () => {
    const wrapper = mount(<SprkTextarea id="textarea-id" />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-describedby'),
    ).toBe(null);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(
      <SprkTextarea analyticsString="321" id="textarea-id" />,
    );
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString has no value`, () => {
    const wrapper = mount(<SprkTextarea id="textarea-id" />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkTextarea idString="test" id="textarea-id" />);
    expect(wrapper.find('[data-id="test"]').length).toBe(1);
  });

  it('should not render data-id when idString has no value', () => {
    const wrapper = mount(<SprkTextarea id="textarea-id" />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should run the supplied formatter', () => {
    const formatterFn = jest.fn(() => true);
    const onChangeMock = jest.fn();
    mount(
      <SprkTextarea
        formatter={formatterFn}
        onChange={onChangeMock}
        id="textarea-id"
      />,
    );
    expect(formatterFn.mock.calls.length).toBe(1);
  });

  it('should not run the formatter if value has not changed', () => {
    const formatterFn = jest.fn(() => true);
    const wrapper = mount(
      <SprkTextarea formatter={formatterFn} value="test" id="textarea-id" />,
    );
    const textarea = wrapper.find('textarea');
    textarea.simulate('change', { target: { value: 'test' } });
    // Formatter runs on render
    expect(formatterFn.mock.calls.length).toBe(1);
  });

  it('should not run the formatter if the field is invalid', () => {
    const formatterFnInvalid = jest.fn(() => true);
    mount(
      <SprkTextarea
        formatter={formatterFnInvalid}
        isValid={false}
        id="textarea-id"
      />,
    );
    expect(formatterFnInvalid.mock.calls.length).toBe(0);
  });

  it('should pass through additional attributes', () => {
    const wrapper = shallow(
      <SprkTextarea data-my-attr="testing" id="textarea-id" />,
    );
    expect(wrapper.find('[data-my-attr="testing"]').length).toBe(1);
  });

  it('should add forwardedRef to textarea', () => {
    // Create ref
    const forwardedRef = React.createRef();
    // Add ref as prop
    const wrapper = mount(
      <SprkTextarea forwardedRef={forwardedRef} id="textarea-id" />,
    );
    // Use ref to set an attribute
    forwardedRef.current.setAttribute('data-test', 'testing');
    // Check that mounted component received attribute
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('data-test'),
    ).toBe('testing');
  });

  it('should run the supplied onChange function', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <SprkTextarea onChange={onChangeMock} id="textarea-id" />,
    );
    const textarea = wrapper.find('textarea');
    textarea.simulate('change', { target: { value: 'test-val' } });
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
