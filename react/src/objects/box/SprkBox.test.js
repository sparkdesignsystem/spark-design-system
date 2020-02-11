import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkBox from './SprkBox';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkBox:', () => {
  it('should display a div with the correct base class', () => {
    const wrapper = shallow(<SprkBox />);
    expect(wrapper.find('div.sprk-o-Box').length).toBe(1);
  });

  it('should set the flush spacing class in addition to the base class when'
    + ' spacing is "flush"', () => {
    const wrapper = shallow(<SprkBox spacing='flush' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--flush').length).toBe(1);
  });

  it('should set the tiny spacing class in addition to the base class when'
    + ' spacing is "tiny"', () => {
    const wrapper = shallow(<SprkBox spacing='tiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--tiny').length).toBe(1);
  });

  it('should set the small spacing class in addition to the base class when'
    + ' spacing is "small"', () => {
    const wrapper = shallow(<SprkBox spacing='small' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--small').length).toBe(1);
  });

  it('should set the large spacing class in addition to the base class when'
    + ' spacing is "large"', () => {
    const wrapper = shallow(<SprkBox spacing='large' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--large').length).toBe(1);
  });

  it('should set the huge spacing class in addition to the base class when'
    + ' spacing is "huge"', () => {
    const wrapper = shallow(<SprkBox spacing='huge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--huge').length).toBe(1);
  });

  it('should set the misc-a spacing class in addition to the base class when'
    + ' spacing is "miscA"', () => {
    const wrapper = shallow(<SprkBox spacing='miscA' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-a').length).toBe(1);
  });

  it('should set the misc-b spacing class in addition to the base class when'
    + ' spacing is "miscB"', () => {
    const wrapper = shallow(<SprkBox spacing='miscB' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-b').length).toBe(1);
  });

  it('should set the misc-c spacing class in addition to the base class when'
    + ' spacing is "miscC"', () => {
    const wrapper = shallow(<SprkBox spacing='miscC' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-c').length).toBe(1);
  });

  it('should set the misc-d spacing class in addition to the base class when'
    + ' spacing is "miscD"', () => {
    const wrapper = shallow(<SprkBox spacing='miscD' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-d').length).toBe(1);
  });

  it('should set the inset-short-tiny spacing class in addition to the base class when'
    + ' spacing is "insetShortTiny"', () => {
    const wrapper = shallow(<SprkBox spacing='insetShortTiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-tiny').length).toBe(1);
  });

  it('should set the inset-short-small spacing class in addition to the base class when'
    + ' spacing is "insetShortSmall"', () => {
    const wrapper = shallow(<SprkBox spacing='insetShortSmall' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-small').length).toBe(1);
  });

  it('should set the inset-short-medium spacing class in addition to the base class when'
    + ' spacing is "insetShortMedium"', () => {
    const wrapper = shallow(<SprkBox spacing='insetShortMedium' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-medium').length).toBe(1);
  });

  it('should set the inset-short-large spacing class in addition to the base class when'
    + ' spacing is "insetShortLarge"', () => {
    const wrapper = shallow(<SprkBox spacing='insetShortLarge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-large').length).toBe(1);
  });

  it('should set the inset-short-huge spacing class in addition to the base class when'
    + ' spacing is "insetShortHuge"', () => {
    const wrapper = shallow(<SprkBox spacing='insetShortHuge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-huge').length).toBe(1);
  });

  it('should set the inset-tall-tiny spacing class in addition to the base class when'
    + ' spacing is "insetTallTiny"', () => {
    const wrapper = shallow(<SprkBox spacing='insetTallTiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-tiny').length).toBe(1);
  });

  it('should set the inset-tall-small spacing class in addition to the base class when'
    + ' spacing is "insetTallSmall"', () => {
    const wrapper = shallow(<SprkBox spacing='insetTallSmall' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-small').length).toBe(1);
  });

  it('should set the inset-tall-medium spacing class in addition to the base class when'
    + ' spacing is "insetTallMedium"', () => {
    const wrapper = shallow(<SprkBox spacing='insetTallMedium' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-medium').length).toBe(1);
  });

  it('should set the inset-tall-large spacing class in addition to the base class when'
    + ' spacing is "insetTallLarge"', () => {
    const wrapper = shallow(<SprkBox spacing='insetTallLarge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-large').length).toBe(1);
  });

  it('should set the inset-tall-huge spacing class in addition to the base class when'
    + ' spacing is "insetTallHuge"', () => {
    const wrapper = shallow(<SprkBox spacing='insetTallHuge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-huge').length).toBe(1);
  });
});
