/* global it expect beforeEach afterEach */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// To text Link properly
import { Link, BrowserRouter as Router } from 'react-router-dom';
import SprkCardTeaser from './SprkCardTeaser';

Enzyme.configure({ adapter: new Adapter() });

let testTeaserConfig = {};

const createTestObjects = () => {
  // reset and recreate test teaser config
  testTeaserConfig = {};

  testTeaserConfig.bodyText = 'test body text';
  testTeaserConfig.title = 'Test title';
  testTeaserConfig.titleFirst = false;
  testTeaserConfig.media = {
    additionalMediaIconClasses: '',
    href: '',
    mediaLinkElement: 'a',
    iconName: '',
    imgAlt: '',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
    mediaAnalyticsString: '',
    mediaVariant: 'img',
  };
  testTeaserConfig.cta = {
    ctaAnalytics: '',
    ctaIcon: '',
    ctaLinkElement: 'a',
    ctaVariant: 'link',
    href: '',
  };
};

beforeEach(() => {
  createTestObjects();
});

afterEach(() => {
  createTestObjects();
});

// Media
it('should render media as image', () => {
  testTeaserConfig.media.mediaVariant = 'img';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasMediaImg = wrapper.find('Media img').length === 1;
  expect(hasMediaImg).toBe(true);
});

it('should render media as icon', () => {
  testTeaserConfig.media.mediaVariant = 'icon';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasMediaImg = wrapper.find('SprkIcon').length === 1;
  expect(hasMediaImg).toBe(true);
});

// Body Text
it('should render bodyText', () => {
  const testVariable = 'test';
  testTeaserConfig.bodyText = testVariable;
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasBodyText = wrapper.find('BodyText').contains(testVariable);
  expect(hasBodyText).toBe(true);
});

// Title
it('should render title with correct classes (!titleFirst)', () => {
  const testVariable = 'test';
  testTeaserConfig.title = testVariable;
  testTeaserConfig.titleFirst = false;
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasTitle = wrapper.find('Title').contains(testVariable);
  expect(hasTitle).toBe(true);
});

it('should render title with correct classes when titleFirst', () => {
  const testVariable = 'test';
  testTeaserConfig.title = testVariable;
  testTeaserConfig.titleFirst = true;
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasTitle = wrapper.find('Title h3').hasClass('sprk-c-Card__content');
  expect(hasTitle).toBe(true);
});

// CTA
it('should render cta as a button', () => {
  testTeaserConfig.cta.ctaVariant = 'button';
  testTeaserConfig.cta.ctaLinkElement = 'button';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasButtonCta = wrapper.find('CallToAction button').length === 1;
  expect(hasButtonCta).toBe(true);
});

it('should render cta as a link', () => {
  testTeaserConfig.cta.ctaVariant = 'link';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasButtonCta = wrapper.find('CallToAction a').length === 1;
  expect(hasButtonCta).toBe(true);
});

it('should render icon next to link', () => {
  testTeaserConfig.cta.ctaVariant = 'link';
  testTeaserConfig.cta.ctaIcon = 'chevron-right';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasButtonCta = wrapper.find('CallToAction a SprkIcon').length === 1;
  expect(hasButtonCta).toBe(true);
});

// TagNameLink
it('should render media img inside react router link', () => {
  testTeaserConfig.media.mediaVariant = 'img';
  testTeaserConfig.media.mediaLinkElement = Link;
  testTeaserConfig.media.to = 'www.test.com';
  const wrapper = mount(
    <Router>
      <SprkCardTeaser teaserConfig={testTeaserConfig} />
    </Router>,
  );
  const hasRouterLink = wrapper.find('Media Link').length === 1;
  expect(hasRouterLink).toBe(true);
});

it('should render media icon inside TagName link', () => {
  testTeaserConfig.media.mediaVariant = 'icon';
  testTeaserConfig.media.iconName = 'call-team-member';
  testTeaserConfig.media.mediaLinkElement = Link;
  testTeaserConfig.media.to = 'www.test.com';

  const wrapper = mount(
    <Router>
      <SprkCardTeaser teaserConfig={testTeaserConfig} />
    </Router>,
  );
  const hasTagNameLink = wrapper.find('Media Link SprkIcon').length === 1;
  expect(hasTagNameLink).toBe(true);
});

it('should render CTA link as TagName link', () => {
  testTeaserConfig.cta.ctaVariant = 'link';
  testTeaserConfig.cta.ctaLinkElement = Link;
  testTeaserConfig.cta.to = 'www.test.com';
  const wrapper = mount(
    <Router>
      <SprkCardTeaser teaserConfig={testTeaserConfig} />
    </Router>,
  );
  const hasRouterLink = wrapper.find('CallToAction Link').length === 1;
  expect(hasRouterLink).toBe(true);
});

it('should render CTA link with icon as TagName link', () => {
  testTeaserConfig.cta.ctaVariant = 'link';
  testTeaserConfig.cta.ctaLinkElement = Link;
  testTeaserConfig.cta.to = 'www.test.com';
  testTeaserConfig.cta.ctaIcon = 'chevron-right';
  const wrapper = mount(
    <Router>
      <SprkCardTeaser teaserConfig={testTeaserConfig} />
    </Router>,
  );
  const hasRouterLink = wrapper.find('CallToAction Link SprkIcon').length === 1;
  expect(hasRouterLink).toBe(true);
});

it('should render CTA button router link', () => {
  testTeaserConfig.cta.ctaVariant = 'button';
  testTeaserConfig.cta.ctaLinkElement = Link;
  testTeaserConfig.cta.to = 'www.test.com';
  const wrapper = mount(
    <Router>
      <SprkCardTeaser teaserConfig={testTeaserConfig} />
    </Router>,
  );
  const hasRouterLink = wrapper.find('CallToAction Link.sprk-c-Button').length === 1;
  expect(hasRouterLink).toBe(true);
});

it('should render CTA button as anchor link with button style', () => {
  testTeaserConfig.cta.ctaVariant = 'button';
  testTeaserConfig.cta.ctaLinkElement = 'a';
  testTeaserConfig.cta.href = 'www.test.com';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasRouterLink = wrapper.find('CallToAction CtaButton a').length === 1;
  expect(hasRouterLink).toBe(true);
});

it('should render CTA link as anchor', () => {
  testTeaserConfig.cta.ctaVariant = 'link';
  testTeaserConfig.cta.ctaLinkElement = 'a';
  testTeaserConfig.cta.href = 'www.test.com';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasRouterLink = wrapper.find('CallToAction CtaLink a').length === 1;
  expect(hasRouterLink).toBe(true);
});

// Order if Title First
it('should render correct order when title is first', () => {
  testTeaserConfig.titleFirst = true;
  testTeaserConfig.media.mediaVariant = 'img';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasCorrectOrder = wrapper.find('Title + Media + div.sprk-c-Card__content').length === 1;
  expect(hasCorrectOrder).toBe(true);
});

it('should render correct order of elements when media is icon', () => {
  testTeaserConfig.media.mediaVariant = 'icon';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasCorrectOrder = wrapper.find('Media + Title + BodyText + CallToAction').length === 1;
  expect(hasCorrectOrder).toBe(true);
});

it('should render correct order of elements when media is img', () => {
  testTeaserConfig.media.mediaVariant = 'img';
  const wrapper = mount(<SprkCardTeaser teaserConfig={testTeaserConfig} />);
  const hasCorrectOrder = wrapper.find(
    'Media + div.sprk-c-Card__content Title + BodyText + CallToAction',
  ).length === 1;
  expect(hasCorrectOrder).toBe(true);
});
