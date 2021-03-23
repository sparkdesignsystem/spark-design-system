import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import SprkHighlightBoard from './SprkHighlightBoard';

Enzyme.configure({ adapter: new Adapter() });
let stub;

beforeEach(() => {
  stub = sinon.stub(console, 'error');
});

afterEach(() => {
  stub.restore();
});

describe('SprkHighlightBoard:', () => {
  it('should display a div element with the correct base class', () => {
    const wrapper = shallow(<SprkHighlightBoard />);
    expect(wrapper.find('div.sprk-c-HighlightBoard').length).toBe(1);
  });

  it('should not render an image if imgSrc is not provided', () => {
    const wrapper = shallow(<SprkHighlightBoard />);
    const img = wrapper.find('img');

    expect(img.length).toBe(0);
  });

  it('should render an image if an imgSrc is provided', () => {
    const wrapper = shallow(<SprkHighlightBoard imgSrc="foo" imgAlt="bar" />);
    const img = wrapper.find('img');

    expect(img.length).toBe(1);
    expect(img.hasClass('sprk-c-HighlightBoard__image')).toBe(true);
  });

  it('should render a header when provided', () => {
    const wrapper = shallow(<SprkHighlightBoard heading="foo" />);
    const header = wrapper.find('h1.sprk-c-HighlightBoard__heading');

    expect(header.length).toBe(1);
  });

  it('should render both ctas when provided text for both', () => {
    const wrapper = shallow(
      <SprkHighlightBoard ctaText="this is a test" ctaText2="so is this" />,
    );
    const contentDiv = wrapper.find('div.sprk-c-HighlightBoard__cta');

    expect(contentDiv.length).toBe(2);
  });

  it('should not allow a secondary CTA without a primary CTA', () => {
    const wrapper = shallow(<SprkHighlightBoard ctaText2="so is this" />);
    const contentDiv = wrapper.find('div.sprk-c-HighlightBoard__cta');

    expect(contentDiv.length).toBe(0);
  });
});
