import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTextarea from './SprkTextarea';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTextarea:', () => {
  it('should render a textarea with the correct class', () => {
    const wrapper = mount(<SprkTextarea />);
    expect(wrapper.find('.sprk-b-TextArea').length).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(<SprkTextarea additionalClasses="sprk-u-mbm" />);
    expect(wrapper.find('.sprk-b-TextArea.sprk-u-mbm').length).toBe(1);
  });

  it('should add error class when isValid is false', () => {
    const wrapper = mount(<SprkTextarea isValid={false} />);
    expect(wrapper.find('.sprk-b-TextArea--error').length).toBe(1);
  });

  it('should not add error class when isValid is true', () => {
    const wrapper = mount(<SprkTextarea isValid />);
    expect(wrapper.find('.sprk-b-TextArea--error').length).toBe(0);
  });

  it('should add disabled attribute when isDisabled is true', () => {
    const wrapper = mount(<SprkTextarea isDisabled />);
    expect(wrapper.find('textarea[disabled]').length).toBe(1);
  });

  it('should set aria-invalid attribute to true when isValid is false', () => {
    const wrapper = mount(<SprkTextarea isValid={false} />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-invalid'),
    ).toBe('true');
  });

  it('should not set aria-invalid attr to false when isValid is true', () => {
    const wrapper = mount(<SprkTextarea isValid />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-invalid'),
    ).toBe('false');
  });

  it('should set aria-describedby attribute if value provided', () => {
    const wrapper = mount(<SprkTextarea ariaDescribedBy="error-id" />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-describedby'),
    ).toBe('error-id');
  });

  it('should not set aria-describedby attr if not provided', () => {
    const wrapper = mount(<SprkTextarea />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-describedby'),
    ).toBe(null);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkTextarea analyticsString="321" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkTextarea idString="test" />);
    expect(wrapper.find('[data-id="test"]').length).toBe(1);
  });

  it('should run the supplied formatter', () => {
    const formatterFn = jest.fn(() => true);
    const onChangeMock = jest.fn();
    mount(<SprkTextarea formatter={formatterFn} onChange={onChangeMock} />);
    expect(formatterFn.mock.calls.length).toBe(1);
  });

  it('should not run the formatter if the field is invalid', () => {
    const formatterFnInvalid = jest.fn(() => true);
    mount(<SprkTextarea formatter={formatterFnInvalid} isValid={false} />);
    expect(formatterFnInvalid.mock.calls.length).toBe(0);
  });

  it('should pass through additional attributes', () => {
    const wrapper = shallow(<SprkTextarea data-my-attr="testing" />);
    expect(wrapper.find('[data-my-attr="testing"]').length).toBe(1);
  });

  it('should add forwardedRef to textarea', () => {
    // Create ref
    const forwardedRef = React.createRef();
    // Add ref as prop
    const wrapper = mount(<SprkTextarea forwardedRef={forwardedRef} />);
    // Use ref to set an attribute
    forwardedRef.current.setAttribute('data-test', 'testing');
    // Check that mounted component received attribute
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('data-test'),
    ).toBe('testing');
  });

  it('should run the supplied onChange function', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(<SprkTextarea onChange={onChangeMock} />);
    const textarea = wrapper.find('textarea');
    textarea.simulate('change', { target: { value: 'test-val' } });
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
