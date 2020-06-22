import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRadio from './SprkRadio';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkRadio:', () => {
  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkRadio additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-SelectionContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply additional radio classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkRadio radioAdditionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-Radio__input').hasClass(expected)).toBe(true);
  });

  it('should apply additional label classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkRadio labelAdditionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-Radio__label').hasClass(expected)).toBe(true);
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkRadio variant="huge" />);
    expect(
      wrapper.find('.sprk-b-SelectionContainer').hasClass('sprk-b-Radio--huge'),
    ).toBe(true);
  });

  it('should render label', () => {
    const wrapper = shallow(<SprkRadio>Label</SprkRadio>);
    expect(wrapper.find('label').text()).toEqual('Label');
    expect(
      wrapper
        .find('label')
        .hasClass('sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label'),
    ).toBe(true);
  });

  it('should apply ariaDescribedBy', () => {
    const expected = 'test-aria';
    const wrapper = shallow(<SprkRadio ariaDescribedBy={expected} />);
    expect(
      wrapper.find('.sprk-b-Radio__input').prop('aria-describedby'),
    ).toEqual(expected);
  });

  it('should apply id', () => {
    const expected = 'testId';
    const wrapper = shallow(<SprkRadio id={expected} />);
    expect(wrapper.find('.sprk-b-Radio__label').prop('htmlFor')).toEqual(
      expected,
    );
    expect(wrapper.find('.sprk-b-Radio__input').prop('id')).toEqual(expected);
  });

  it('should run the supplied onChangeFunc function for radioes', () => {
    const onRadioChangeMock = jest.fn();
    const wrapper = mount(<SprkRadio onChangeFunc={onRadioChangeMock} />);
    const radio = wrapper.find('input[type="radio"]');
    radio.simulate('change', { target: { value: 'test-value' } });
    expect(onRadioChangeMock.mock.calls.length).toBe(1);
  });
});
