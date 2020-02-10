import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkBox from './SprkBox';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkStack:', () => {
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
    + ' spacing is "misc-a"', () => {
    const wrapper = shallow(<SprkBox spacing='misc-a' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-a').length).toBe(1);
  });

  it('should set the misc-b spacing class in addition to the base class when'
    + ' spacing is "misc-b"', () => {
    const wrapper = shallow(<SprkBox spacing='misc-b' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-b').length).toBe(1);
  });

  it('should set the misc-c spacing class in addition to the base class when'
    + ' spacing is "misc-c"', () => {
    const wrapper = shallow(<SprkBox spacing='misc-c' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-c').length).toBe(1);
  });

  it('should set the misc-d spacing class in addition to the base class when'
    + ' spacing is "misc-d"', () => {
    const wrapper = shallow(<SprkBox spacing='misc-d' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-d').length).toBe(1);
  });

  it('should set the inset-short-tiny spacing class in addition to the base class when'
    + ' spacing is "inset-short-tiny"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-short-tiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-tiny').length).toBe(1);
  });

  it('should set the inset-short-small spacing class in addition to the base class when'
    + ' spacing is "inset-short-small"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-short-small' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-small').length).toBe(1);
  });

  it('should set the inset-short-medium spacing class in addition to the base class when'
    + ' spacing is "inset-short-medium"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-short-medium' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-medium').length).toBe(1);
  });

  it('should set the inset-short-large spacing class in addition to the base class when'
    + ' spacing is "inset-short-large"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-short-large' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-large').length).toBe(1);
  });

  it('should set the inset-short-huge spacing class in addition to the base class when'
    + ' spacing is "inset-short-huge"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-short-huge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-huge').length).toBe(1);
  });

  it('should set the inset-tall-tiny spacing class in addition to the base class when'
    + ' spacing is "inset-tall-tiny"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-tall-tiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-tiny').length).toBe(1);
  });

  it('should set the inset-tall-small spacing class in addition to the base class when'
    + ' spacing is "inset-tall-small"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-tall-small' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-small').length).toBe(1);
  });

  it('should set the inset-tall-medium spacing class in addition to the base class when'
    + ' spacing is "inset-tall-medium"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-tall-medium' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-medium').length).toBe(1);
  });

  it('should set the inset-tall-large spacing class in addition to the base class when'
    + ' spacing is "inset-tall-large"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-tall-large' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-large').length).toBe(1);
  });

  it('should set the inset-tall-huge spacing class in addition to the base class when'
    + ' spacing is "inset-tall-huge"', () => {
    const wrapper = shallow(<SprkBox spacing='inset-tall-huge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-huge').length).toBe(1);
  });
});
