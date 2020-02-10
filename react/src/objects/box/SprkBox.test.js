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
    + ' spacingSize is "flush"', () => {
    const wrapper = shallow(<SprkBox spacingSize='flush' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--flush').length).toBe(1);
  });

  it('should set the tiny spacing class in addition to the base class when'
    + ' spacingSize is "tiny"', () => {
    const wrapper = shallow(<SprkBox spacingSize='tiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--tiny').length).toBe(1);
  });

  it('should set the small spacing class in addition to the base class when'
    + ' spacingSize is "small"', () => {
    const wrapper = shallow(<SprkBox spacingSize='small' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--small').length).toBe(1);
  });

  it('should set the large spacing class in addition to the base class when'
    + ' spacingSize is "large"', () => {
    const wrapper = shallow(<SprkBox spacingSize='large' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--large').length).toBe(1);
  });

  it('should set the huge spacing class in addition to the base class when'
    + ' spacingSize is "huge"', () => {
    const wrapper = shallow(<SprkBox spacingSize='huge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--huge').length).toBe(1);
  });

  it('should set the misc-a spacing class in addition to the base class when'
    + ' spacingSize is "misc-a"', () => {
    const wrapper = shallow(<SprkBox spacingSize='misc-a' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-a').length).toBe(1);
  });

  it('should set the misc-b spacing class in addition to the base class when'
    + ' spacingSize is "misc-b"', () => {
    const wrapper = shallow(<SprkBox spacingSize='misc-b' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-b').length).toBe(1);
  });

  it('should set the misc-c spacing class in addition to the base class when'
    + ' spacingSize is "misc-c"', () => {
    const wrapper = shallow(<SprkBox spacingSize='misc-c' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-c').length).toBe(1);
  });

  it('should set the misc-d spacing class in addition to the base class when'
    + ' spacingSize is "misc-d"', () => {
    const wrapper = shallow(<SprkBox spacingSize='misc-d' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--misc-d').length).toBe(1);
  });

  it('should set the inset-short-tiny spacing class in addition to the base class when'
    + ' spacingSize is "inset-short-tiny"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-short-tiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-tiny').length).toBe(1);
  });

  it('should set the inset-short-small spacing class in addition to the base class when'
    + ' spacingSize is "inset-short-small"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-short-small' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-small').length).toBe(1);
  });

  it('should set the inset-short-medium spacing class in addition to the base class when'
    + ' spacingSize is "inset-short-medium"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-short-medium' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-medium').length).toBe(1);
  });

  it('should set the inset-short-large spacing class in addition to the base class when'
    + ' spacingSize is "inset-short-large"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-short-large' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-large').length).toBe(1);
  });

  it('should set the inset-short-huge spacing class in addition to the base class when'
    + ' spacingSize is "inset-short-huge"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-short-huge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-short-huge').length).toBe(1);
  });

  it('should set the inset-tall-tiny spacing class in addition to the base class when'
    + ' spacingSize is "inset-tall-tiny"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-tall-tiny' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-tiny').length).toBe(1);
  });

  it('should set the inset-tall-small spacing class in addition to the base class when'
    + ' spacingSize is "inset-tall-small"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-tall-small' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-small').length).toBe(1);
  });

  it('should set the inset-tall-medium spacing class in addition to the base class when'
    + ' spacingSize is "inset-tall-medium"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-tall-medium' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-medium').length).toBe(1);
  });

  it('should set the inset-tall-large spacing class in addition to the base class when'
    + ' spacingSize is "inset-tall-large"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-tall-large' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-large').length).toBe(1);
  });

  it('should set the inset-tall-huge spacing class in addition to the base class when'
    + ' spacingSize is "inset-tall-huge"', () => {
    const wrapper = shallow(<SprkBox spacingSize='inset-tall-huge' />);
    expect(wrapper.find('div.sprk-o-Box.sprk-o-Box--inset-tall-huge').length).toBe(1);
  });
});
