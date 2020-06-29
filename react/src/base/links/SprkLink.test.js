/* global Enzyme shallow Adapter it expect */
import React from 'react';
import { Link } from 'react-router-dom';
import SprkLink from './SprkLink';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkLink:', () => {
  it(
    'should display a link element with the correct base class if the variant' +
      ' is not unstyled',
    () => {
      const wrapper = shallow(<SprkLink />);
      expect(wrapper.find('a.sprk-b-Link').length).toBe(1);
      expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(false);
    },
  );

  it(
    'should display a link element without the sprk-b-Link class if the' +
      ' variant is unstyled',
    () => {
      const wrapper = shallow(<SprkLink variant="unstyled" />);
      expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(false);
    },
  );

  it(
    'should display a link element with correct classes when variant' +
      ' is simple',
    () => {
      const wrapper = shallow(<SprkLink variant="simple" />);
      expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(false);
    },
  );

  it(
    'should display a link element with correct classes when variant is ' +
      'has-icon',
    () => {
      const wrapper = shallow(<SprkLink variant="has-icon" />);
      expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(true);
    },
  );

  it(
    'should display a link element with correct classes when variant is ' +
      'light',
    () => {
      const wrapper = shallow(<SprkLink variant="light" />);
      expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--plain')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--light')).toBe(true);
    },
  );

  it(
    'should display a link element with correct classes when variant is ' +
      'hasIcon',
    () => {
      const wrapper = shallow(<SprkLink variant="hasIcon" />);
      expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(true);
    },
  );

  it(
    'should display a link element with correct classes when variant is' +
      ' plain',
    () => {
      const wrapper = shallow(<SprkLink variant="plain" />);
      expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--plain')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(false);
      expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(false);
    },
  );

  it(
    'should display a link element with correct classes when variant is' +
      ' disabled',
    () => {
      const wrapper = shallow(<SprkLink variant="disabled" />);
      expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
      expect(wrapper.find('a').hasClass('sprk-b-Link--disabled')).toBe(true);
    },
  );

  it('href should equal # if not provided', () => {
    const wrapper = shallow(<SprkLink />);
    expect(wrapper.find('a[href="#"]').length).toBe(1);
  });

  it('should prevent default when no href is provided', () => {
    const wrapper = shallow(<SprkLink />);
    let prevented = false;
    wrapper.find('a').simulate('click', {
      preventDefault: () => {
        prevented = true;
      },
    });
    expect(prevented).toBe(true);
  });

  it(
    'should not render an href if none is provided and element passed is a' +
      ' router link',
    () => {
      const wrapper = shallow(<SprkLink element={Link} to="button" />);
      expect(wrapper.find('a[href="#"]').length).toBe(0);
    },
  );
});
