import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRadioItem from './SprkRadioItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkRadio:', () => {
  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkRadioItem additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-SelectionContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply additional radio classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(
      <SprkRadioItem radioAdditionalClasses={expected} />,
    );
    expect(wrapper.find('.sprk-b-Radio__input').hasClass(expected)).toBe(true);
  });

  it('should apply additional label classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(
      <SprkRadioItem labelAdditionalClasses={expected} />,
    );
    expect(wrapper.find('.sprk-b-Radio__label').hasClass(expected)).toBe(true);
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkRadioItem variant="huge" />);
    expect(
      wrapper.find('.sprk-b-SelectionContainer').hasClass('sprk-b-Radio--huge'),
    ).toBe(true);
  });

  it('should render label', () => {
    const wrapper = shallow(<SprkRadioItem>Label</SprkRadioItem>);
    expect(wrapper.find('label').text()).toEqual('Label');
    expect(
      wrapper
        .find('label')
        .hasClass('sprk-b-Label sprk-b-Label--inline sprk-b-Radio__label'),
    ).toBe(true);
  });

  it('should apply ariaDescribedBy', () => {
    const expected = 'test-aria';
    const wrapper = shallow(<SprkRadioItem ariaDescribedBy={expected} />);
    expect(
      wrapper.find('.sprk-b-Radio__input').prop('aria-describedby'),
    ).toEqual(expected);
  });

  it('should apply id', () => {
    const expected = 'testId';
    const wrapper = shallow(<SprkRadioItem id={expected} />);
    expect(wrapper.find('.sprk-b-Radio__label').prop('htmlFor')).toEqual(
      expected,
    );
    expect(wrapper.find('.sprk-b-Radio__input').prop('id')).toEqual(expected);
  });

  it('should run the supplied onChangeFunc function for radioes', () => {
    const onRadioChangeMock = jest.fn();
    const wrapper = mount(<SprkRadioItem onChangeFunc={onRadioChangeMock} />);
    const radio = wrapper.find('input[type="radio"]');
    radio.simulate('change', { target: { value: 'test-value' } });
    expect(onRadioChangeMock.mock.calls.length).toBe(1);
  });
});
