/* global Enzyme shallow Adapter it expect */
import React from 'react';
import SprkList from './SprkList';

describe('SprkList:', () => {
  it('should display a ol element with the correct base class', () => {
    const wrapper = shallow(<SprkList element="ol" />);
    expect(wrapper.find('ol.sprk-b-List').length).toBe(1);
  });

  it('should display a ul element with the correct base class', () => {
    const wrapper = shallow(<SprkList element="ul" />);
    expect(wrapper.find('ul.sprk-b-List').length).toBe(1);
  });

  it('should render ol with correct classes when variant is indented', () => {
    const wrapper = shallow(<SprkList element="ol" variant="indented" />);
    expect(wrapper.find('ol').hasClass('sprk-b-List')).toBe(true);
    expect(wrapper.find('ol').hasClass('sprk-b-List--indented')).toBe(true);
  });

  it('should render ul with correct classes when variant is indented', () => {
    const wrapper = shallow(<SprkList element="ul" variant="indented" />);
    expect(wrapper.find('ul').hasClass('sprk-b-List')).toBe(true);
    expect(wrapper.find('ul').hasClass('sprk-b-List--indented')).toBe(true);
  });

  it('should add classes to ol element if additionalClasses has a value', () => {
    const wrapper = shallow(
      <SprkList element="ol" additionalClasses="additionalClass" />,
    );
    expect(wrapper.find('ol').hasClass('sprk-b-List')).toBe(true);
    expect(wrapper.find('ol').hasClass('additionalClass')).toBe(true);
  });

  it('should add classes to ul element if additionalClasses has a value', () => {
    const wrapper = shallow(
      <SprkList element="ul" additionalClasses="additionalClass" />,
    );
    expect(wrapper.find('ul').hasClass('sprk-b-List')).toBe(true);
    expect(wrapper.find('ul').hasClass('additionalClass')).toBe(true);
  });

  it('should add data-id to ol element if idString has a value', () => {
    const wrapper = shallow(<SprkList element="ol" idString="orderedlist-1" />);
    expect(wrapper.find('ol[data-id="orderedlist-1"]').length).toBe(1);
  });

  it('should add data-id to ul element if idString has a value', () => {
    const wrapper = shallow(<SprkList element="ul" idString="unorderedlist-1" />);
    expect(wrapper.find('ul[data-id="unorderedlist-1"]').length).toBe(1);
  });
});
