import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCheckboxItem from './SprkCheckboxItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCheckboxItem:', () => {
  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkCheckboxItem additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-SelectionContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply name to the input', () => {
    const wrapper = shallow(<SprkCheckboxItem name="my-name" />);
    expect(wrapper.find('.sprk-b-Checkbox__input').prop('name')).toBe(
      'my-name',
    );
  });

  it('should apply value to the input', () => {
    const wrapper = shallow(<SprkCheckboxItem value="123" />);
    expect(wrapper.find('.sprk-b-Checkbox__input').prop('value')).toBe('123');
  });

  it('should apply disabled to the input/label if supplied', () => {
    const wrapper = shallow(<SprkCheckboxItem isDisabled />);
    expect(wrapper.find('.sprk-b-Checkbox__input').prop('disabled')).toBe(true);
    expect(
      wrapper.find('.sprk-b-Label').hasClass('sprk-b-Label--disabled'),
    ).toBe(true);
  });

  it('should apply additional checkbox classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(
      <SprkCheckboxItem checkboxAdditionalClasses={expected} />,
    );
    expect(wrapper.find('.sprk-b-Checkbox__input').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply additional label classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(
      <SprkCheckboxItem labelAdditionalClasses={expected} />,
    );
    expect(wrapper.find('.sprk-b-Checkbox__label').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkCheckboxItem variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-SelectionContainer')
        .hasClass('sprk-b-Checkbox--huge'),
    ).toBe(true);
  });

  it('should apply visibility-toggle class', () => {
    const wrapper = shallow(<SprkCheckboxItem isVisibilityToggle />);
    expect(
      wrapper
        .find('.sprk-b-SelectionContainer')
        .hasClass('sprk-b-InputContainer__visibility-toggle'),
    ).toBe(true);
  });

  it(`should not apply visibility-toggle class if it
  isVisibilityToggle is false`, () => {
    const wrapper = shallow(<SprkCheckboxItem isVisibilityToggle={false} />);
    expect(
      wrapper
        .find('.sprk-b-SelectionContainer')
        .hasClass('sprk-b-InputContainer__visibility-toggle'),
    ).toBe(false);
  });

  it('should render label', () => {
    const wrapper = shallow(<SprkCheckboxItem>Label</SprkCheckboxItem>);
    expect(wrapper.find('label').text()).toEqual('Label');
    expect(
      wrapper
        .find('label')
        .hasClass('sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label'),
    ).toBe(true);
  });

  it('should apply ariaDescribedBy', () => {
    const expected = 'test-aria';
    const wrapper = shallow(<SprkCheckboxItem ariaDescribedBy={expected} />);
    expect(
      wrapper.find('.sprk-b-Checkbox__input').prop('aria-describedby'),
    ).toEqual(expected);
  });

  it('should apply id', () => {
    const expected = 'testId';
    const wrapper = shallow(<SprkCheckboxItem id={expected} />);
    expect(wrapper.find('.sprk-b-Checkbox__label').prop('htmlFor')).toEqual(
      expected,
    );
    expect(wrapper.find('.sprk-b-Checkbox__input').prop('id')).toEqual(
      expected,
    );
  });

  it('should run the supplied onChange function for checkboxes', () => {
    const onCheckboxChangeMock = jest.fn();
    const wrapper = mount(<SprkCheckboxItem onChange={onCheckboxChangeMock} />);
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { value: 'test-value' } });
    expect(onCheckboxChangeMock.mock.calls.length).toBe(1);
  });

  it('should pass through additional attributes', () => {
    const wrapper = shallow(<SprkCheckboxItem data-my-attr="testing" />);
    expect(wrapper.find('[data-my-attr="testing"]').length).toBe(1);
  });
});
