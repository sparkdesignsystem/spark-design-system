import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTextarea from './SprkTextarea';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTextInput:', () => {
  it('should render a textarea with the correct class', () => {
    const wrapper = mount(<SprkTextarea />);
    expect(wrapper.find('.sprk-b-TextArea').length).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(<SprkTextarea additionalClasses="sprk-u-mbm" />);
    expect(wrapper.find('.sprk-b-TextArea.sprk-u-mbm').length).toBe(1);
  });

  it('should add disabled attribute isDisabled is true', () => {
    const wrapper = mount(<SprkTextarea isDisabled />);
    expect(wrapper.find('textarea[disabled]').length).toBe(1);
  });

  it('should set aria-invalid attribute to true when isValid is false', () => {
    const wrapper = mount(<SprkTextarea isValid={false} />);
    expect(
      wrapper.find('textarea').getDOMNode().getAttribute('aria-invalid'),
    ).toBe('true');
  });

  it('should not set aria-invalid attr to true when isValid is true', () => {
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
    const onBlur = jest.fn();
    mount(<SprkTextarea formatter={formatterFn} onBlur={onBlur} />);
    expect(formatterFn.mock.calls.length).toBe(2);
  });

  it('should not run the formatter if the field is invalid', () => {
    const formatterFn = jest.fn(() => true);
    const onBlur = jest.fn();
    mount(
      <SprkTextarea formatter={formatterFn} isValid={false} onBlur={onBlur} />,
    );
    expect(formatterFn.mock.calls.length).toBe(0);
  });
});
