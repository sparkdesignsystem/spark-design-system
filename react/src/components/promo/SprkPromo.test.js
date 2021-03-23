import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkPromo from './SprkPromo';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkPromo:', () => {
  it('should display a promo element with the correct base class', () => {
    const wrapper = shallow(<SprkPromo />);
    expect(wrapper.find('div.sprk-c-Promo').length).toBe(1);
  });

  it('should render with the border class when hasBorder is true', () => {
    const wrapper = shallow(<SprkPromo hasBorder />);
    expect(wrapper.find('div.sprk-c-Promo--bordered').length).toBe(1);
  });

  it('should not render with the border class when hasBorder is false', () => {
    const wrapper = shallow(<SprkPromo hasBorder={false} />);
    expect(wrapper.find('div.sprk-c-Promo--bordered').length).toBe(0);
  });

  it('should render with additional classes when provided', () => {
    const wrapper = shallow(<SprkPromo additionalClasses="sprk-u-mam" />);
    expect(wrapper.find('div.sprk-c-Promo').hasClass('sprk-u-mam')).toBe(true);
  });

  it('should render with data-id when provided', () => {
    const wrapper = shallow(<SprkPromo idString="test" />);
    expect(wrapper.find('div.sprk-c-Promo[data-id="test"]').length).toBe(1);
  });

  it('should not render with data-id when not provided', () => {
    const wrapper = shallow(<SprkPromo />);
    expect(wrapper.find('div.sprk-c-Promo[data-id]').length).toBe(0);
  });

  it('should render with additional attributes when provided', () => {
    const wrapper = shallow(<SprkPromo data-test="test" />);
    expect(wrapper.find('div.sprk-c-Promo[data-test="test"]').length).toBe(1);
  });

  it('should render with the flag class when isFlag is true', () => {
    const wrapper = shallow(<SprkPromo isFlag />);
    expect(wrapper.find('div.sprk-c-Promo--flag').length).toBe(1);
  });

  it('should not render with the flag class when isFlag is false', () => {
    const wrapper = shallow(<SprkPromo isFlag={false} />);
    expect(wrapper.find('div.sprk-c-Promo--flag').length).toBe(0);
  });
});
