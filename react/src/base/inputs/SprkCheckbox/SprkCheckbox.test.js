import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCheckbox from './SprkCheckbox';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCheckbox:', () => {
  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkCheckbox additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-SelectionContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply additional checkbox classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(
      <SprkCheckbox checkboxAdditionalClasses={expected} />,
    );
    expect(wrapper.find('.sprk-b-Checkbox__input').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply additional label classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkCheckbox labelAdditionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-Checkbox__label').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkCheckbox variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-SelectionContainer')
        .hasClass('sprk-b-Checkbox--huge'),
    ).toBe(true);
  });

  it('should render label', () => {
    const wrapper = shallow(<SprkCheckbox>Label</SprkCheckbox>);
    expect(wrapper.find('label').text()).toEqual('Label');
    expect(
      wrapper
        .find('label')
        .hasClass('sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label'),
    ).toBe(true);
  });

  it('should apply ariaDescribedBy', () => {
    const expected = 'test-aria';
    const wrapper = shallow(<SprkCheckbox ariaDescribedBy={expected} />);
    expect(
      wrapper.find('.sprk-b-Checkbox__input').prop('aria-describedby'),
    ).toEqual(expected);
  });

  it('should apply id', () => {
    const expected = 'testId';
    const wrapper = shallow(<SprkCheckbox id={expected} />);
    expect(wrapper.find('.sprk-b-Checkbox__label').prop('htmlFor')).toEqual(
      expected,
    );
    expect(wrapper.find('.sprk-b-Checkbox__input').prop('id')).toEqual(
      expected,
    );
  });

  it('should run the supplied onChangeFunc function for checkboxes', () => {
    const onCheckboxChangeMock = jest.fn();
    const wrapper = mount(<SprkCheckbox onChangeFunc={onCheckboxChangeMock} />);
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { value: 'test-value' } });
    expect(onCheckboxChangeMock.mock.calls.length).toBe(1);
  });
});
