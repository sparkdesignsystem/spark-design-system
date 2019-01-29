import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkHighlightBoard from './SprkHighlightBoard';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkHighlightBoard />);
  expect(wrapper.find('div.sprk-c-HighlightBoard').length).toBe(1);
});

it('should not render an image if imgSrc is not provided', () => {
  const wrapper = shallow(<SprkHighlightBoard/>);
  const img = wrapper.find('img');

  expect(img.length).toBe(0);
});

it('should render an image if an imgSrc is provided', () => {
  const wrapper = shallow(<SprkHighlightBoard imgSrc='foo'/>);
  const img = wrapper.find('img');

  expect(img.length).toBe(1);
  expect(img.hasClass('sprk-c-HighlightBoard__image')).toBe(true);
});

it('should not render a content section if there is no header or ctas', () => {
  const wrapper = shallow(<SprkHighlightBoard/>);
  const contentDiv = wrapper.find('div.sprk-c-HighlightBoard__content');

  expect(contentDiv.length).toBe(0);
});

it('should render a content section when provided a header', () => {
  const wrapper = shallow(<SprkHighlightBoard heading='This is a test'/>);
  const contentDiv = wrapper.find('div.sprk-c-HighlightBoard__content');

  expect(contentDiv.length).toBe(1);
});

it('should render a content section when provided a cta text', () => {
  const wrapper = shallow(<SprkHighlightBoard ctaText='this is a test'/>);
  const contentDiv = wrapper.find('div.sprk-c-HighlightBoard__content');

  expect(contentDiv.length).toBe(1);
});

it('should render both ctas when provided text for both', () => {
  const wrapper = shallow(<SprkHighlightBoard ctaText='this is a test' ctaText2='so is this'/>);
  const contentDiv = wrapper.find('div.sprk-c-HighlightBoard__cta');

  expect(contentDiv.length).toBe(2);
});