import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkPromo from './SprkPromo';

Enzyme.configure({ adapter: new Adapter() });

// Root Element Tests

describe('SprkPromo:', () => {
  it('should display a promo element with the correct base class', () => {
    const wrapper = shallow(<SprkPromo />);
    expect(wrapper.find('div.sprk-c-Promo').length).toBe(1);
  });

  it('should render with the border class when hasBorder is provided', () => {
    const wrapper = shallow(<SprkPromo hasBorder />);
    expect(wrapper.find('div.sprk-c-Promo--bordered').length).toBe(1);
  });

  it('should render with additional classes when provided', () => {
    const wrapper = shallow(<SprkPromo additionalClasses="foobar" />);
    expect(wrapper.find('div.sprk-c-Promo').hasClass('foobar')).toBe(true);
  });

  it('should render with data-id when provided', () => {
    const wrapper = shallow(<SprkPromo idString="foo" />);
    expect(wrapper.find('div.sprk-c-Promo[data-id="foo"]').length).toBe(1);
  });

  it('should render with additional attributes when provided', () => {
    const wrapper = shallow(<SprkPromo data-bob="bobwise" />);
    expect(wrapper.find('div.sprk-c-Promo[data-bob="bobwise"]').length).toBe(1);
  });

  // Flag Variant

  it('should render with the flag class when isFlag is provided', () => {
    const wrapper = shallow(<SprkPromo isFlag />);
    expect(wrapper.find('div.sprk-c-Promo--flag').length).toBe(1);
  });

  it('should render a flag image with passed in properties', () => {
    const wrapper = shallow(<SprkPromo isFlag imgAlt="foo" imgSrc="bar" />);
    const img = wrapper.find('img.sprk-c-Promo__image--flag');

    expect(img.length).toBe(1);
    expect(img.find('[alt="foo"]').length).toBe(1);
    expect(img.find('[src="bar"]').length).toBe(1);
  });

  it('should not render an image in the flag variant if no src is provided', () => {
    const wrapper = shallow(<SprkPromo isFlag />);

    expect(wrapper.find('img').length).toBe(0);
  });

  it('should render a link with the correct properties when isFlag is provided', () => {
    const wrapper = mount(
      <SprkPromo
        isFlag
        imgLinkHref="foo"
        imgLinkAnalytics="bar"
        imgLinkIdString="baz"
        imgSrc="foobar"
      />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.find('[href="foo"]').length).toBe(1);
    expect(link.find('[data-analytics="bar"]').length).toBe(1);
    expect(link.find('[data-id="baz"]').length).toBe(1);
  });

  it('should render a link with the correct classes when isFlag and additionalClassesImgLink are provided', () => {
    const wrapper = mount(
      <SprkPromo isFlag additionalClassesImgLink="bobsClass" imgSrc="foobar" />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.hasClass('sprk-o-Stack__item--fourth@s')).toBe(true);
    expect(link.hasClass('sprk-o-Stack__item')).toBe(true);
    expect(link.hasClass('bobsClass')).toBe(true);
  });

  // Non-flag image and link

  it('should render an image with passed in properties', () => {
    const wrapper = shallow(<SprkPromo imgAlt="foo" imgSrc="bar" />);
    const img = wrapper.find('img.sprk-c-Promo__image');
    expect(img.length).toBe(1);
    expect(img.find('[alt="foo"]').length).toBe(1);
    expect(img.find('[src="bar"]').length).toBe(1);
  });

  it('should not render an image if no src is provided', () => {
    const wrapper = shallow(<SprkPromo />);

    expect(wrapper.find('img').length).toBe(0);
  });

  it('should render an image link with the correct properties', () => {
    const wrapper = mount(
      <SprkPromo
        imgLinkHref="foo"
        imgLinkAnalytics="bar"
        imgLinkIdString="baz"
        imgSrc="foobar"
      />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.find('[href="foo"]').length).toBe(1);
    expect(link.find('[data-analytics="bar"]').length).toBe(1);
    expect(link.find('[data-id="baz"]').length).toBe(1);
  });

  it('should render a link with the correct classes when imgSrc and additionalClassesImgLink are provided', () => {
    const wrapper = mount(
      <SprkPromo additionalClassesImgLink="bobsClass" imgSrc="foobar" />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.hasClass('sprk-o-Stack__item--half@s')).toBe(true);
    expect(link.hasClass('sprk-o-Stack__item')).toBe(true);
    expect(link.hasClass('bobsClass')).toBe(true);
  });

  it('should render a link with the correct classes when additionalClassesImgLink are provided', () => {
    const wrapper = mount(
      <SprkPromo imgSrc="foobar" additionalClassesImgLink="bobsClass" />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.hasClass('sprk-o-Stack__item--half@s')).toBe(true);
    expect(link.hasClass('sprk-o-Stack__item')).toBe(true);
    expect(link.hasClass('bobsClass')).toBe(true);
  });

  // Body elements

  it('should render a content div with the correct classes', () => {
    const wrapper = shallow(<SprkPromo additionalClassesContent="bobsClass" />);
    const content = wrapper.find('div.sprk-c-Promo__content');

    expect(content.length).toBe(1);
    expect(content.hasClass('sprk-o-Stack__item')).toBe(true);
    expect(content.hasClass('sprk-o-Stack')).toBe(true);
    expect(content.hasClass('sprk-o-Stack--large')).toBe(true);
    expect(content.hasClass('bobsClass')).toBe(true);
  });

  it('should render a content div with the correct classes in the flag variant', () => {
    const wrapper = shallow(<SprkPromo isFlag />);
    const content = wrapper.find('div.sprk-c-Promo__content');

    expect(content.length).toBe(1);
    expect(content.hasClass('sprk-o-Stack__item--three-fourths@s')).toBe(true);
  });

  it('should render a content div with the correct classes when an image is supplied', () => {
    const wrapper = shallow(<SprkPromo imgSrc="foobar" />);
    const content = wrapper.find('div.sprk-c-Promo__content');

    expect(content.length).toBe(1);
    expect(content.hasClass('sprk-o-Stack__item--half@s')).toBe(true);
  });

  it('should render a title when provided', () => {
    const wrapper = shallow(<SprkPromo title="foo" />);
    const title = wrapper.find('h3.sprk-c-Promo__title');

    expect(title.length).toBe(1);
    expect(title.text()).toEqual('foo');
  });

  it('should render a subtitle when provided', () => {
    const wrapper = shallow(<SprkPromo subtitle="foo" />);
    const subtitle = wrapper.find('div.sprk-c-Promo__subtitle');

    expect(subtitle.length).toBe(1);
    expect(subtitle.text()).toEqual('foo');
  });

  // Button CTA

  it('should render a button when cta is set to button', () => {
    const wrapper = mount(<SprkPromo cta="button" />);

    expect(wrapper.find('a.sprk-c-Button').length).toBe(1);
  });

  it('should not render a button if cta is not set', () => {
    const wrapper = mount(<SprkPromo />);

    expect(wrapper.find('a.sprk-c-Button').length).toBe(0);
  });

  it('should render a button cta with the correct properties', () => {
    const wrapper = mount(
      <SprkPromo
        cta="button"
        ctaHref="foo"
        ctaAnalytics="bar"
        ctaIdString="baz"
        ctaText="foobar"
      />,
    );
    const button = wrapper.find('a.sprk-c-Button');

    expect(button.length).toBe(1);
    expect(button.find('[href="foo"]').length).toBe(1);
    // expect(button.find('[data-analytics="bar"]').length).toBe(1);
    expect(button.find('[data-id="baz"]').length).toBe(1);
    expect(button.text()).toEqual('foobar');
  });

  it('should render a button with the correct class when buttonVariant is secondary', () => {
    const wrapper = mount(<SprkPromo cta="button" buttonVariant="secondary" />);
    const button = wrapper.find('a.sprk-c-Button');
    expect(button.hasClass('sprk-c-Button--secondary')).toBe(true);
  });

  it('should render a button with the correct class when buttonVariant is tertiary', () => {
    const wrapper = mount(<SprkPromo cta="button" buttonVariant="tertiary" />);
    const button = wrapper.find('a.sprk-c-Button');
    expect(button.hasClass('sprk-c-Button--tertiary')).toBe(true);
  });

  it('should render a button with the correct class when buttonVariant is quaternary', () => {
    const wrapper = mount(
      <SprkPromo cta="button" buttonVariant="quaternary" />,
    );
    const button = wrapper.find('a.sprk-c-Button');
    expect(button.hasClass('sprk-c-Button--quaternary')).toBe(true);
  });

  // Link CTA

  it('should render a link when cta is set to link', () => {
    const wrapper = mount(<SprkPromo cta="link" />);

    expect(wrapper.find('a.sprk-b-Link').length).toBe(1);
  });

  it('should not render a link if cta is not set', () => {
    const wrapper = mount(<SprkPromo />);

    expect(wrapper.find('a.sprk-b-Link').length).toBe(0);
  });

  const wrapper = mount(
    <SprkPromo
      cta="link"
      ctaHref="foo"
      ctaAnalytics="bar"
      ctaIdString="baz"
      ctaText="foobar"
    />,
  );
  it('should render a link cta with the correct properties', () => {
    const link = wrapper.find('a.sprk-b-Link');

    expect(link.length).toBe(1);
    expect(link.find('[href="foo"]').length).toBe(1);
    expect(link.find('[data-analytics="bar"]').length).toBe(1);
    expect(link.find('[data-id="baz"]').length).toBe(1);
    expect(link.text()).toEqual('foobar');
  });

  // Reversed Flag Image and Link

  it('should render a flag image with passed in properties in the reversed variant', () => {
    const wrapper = shallow(
      <SprkPromo isFlag imgAlt="foo" imgSrc="bar" mediaRev />,
    );
    const img = wrapper.find('img.sprk-c-Promo__image--flag');

    expect(img.length).toBe(1);
    expect(img.find('[alt="foo"]').length).toBe(1);
    expect(img.find('[src="bar"]').length).toBe(1);
  });

  it('should not render an image in the reversed flag variant if no src is provided', () => {
    const wrapper = shallow(<SprkPromo isFlag mediaRev />);

    expect(wrapper.find('img').length).toBe(0);
  });

  it('should render a link with the correct properties in the reversed flag variant', () => {
    const wrapper = mount(
      <SprkPromo
        isFlag
        mediaRev
        imgLinkHref="foo"
        imgLinkAnalytics="bar"
        imgLinkIdString="baz"
        imgSrc="foobar"
      />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.find('[href="foo"]').length).toBe(1);
    expect(link.find('[data-analytics="bar"]').length).toBe(1);
    expect(link.find('[data-id="baz"]').length).toBe(1);
  });

  it('should render a link with the correct classes when isFlag and additionalClassesImgLink are provided', () => {
    const wrapper = mount(
      <SprkPromo
        isFlag
        mediaRev
        additionalClassesImgLink="bobsClass"
        imgSrc="foobar"
      />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.hasClass('sprk-o-Stack__item--fourth@s')).toBe(true);
    expect(link.hasClass('sprk-o-Stack__item')).toBe(true);
    expect(link.hasClass('bobsClass')).toBe(true);
  });

  // Reversed Non-Flag Image with Link

  it('should render an image with passed in properties in the reversed variant', () => {
    const wrapper = shallow(<SprkPromo imgAlt="foo" imgSrc="bar" mediaRev />);
    const img = wrapper.find('img.sprk-c-Promo__image');

    expect(img.length).toBe(1);
    expect(img.find('[alt="foo"]').length).toBe(1);
    expect(img.find('[src="bar"]').length).toBe(1);
  });

  it('should not render an image in the reversed variant if no src is provided', () => {
    const wrapper = shallow(<SprkPromo mediaRev />);

    expect(wrapper.find('img').length).toBe(0);
  });

  it('should render an image link with the correct properties in the reversed variant', () => {
    const wrapper = mount(
      <SprkPromo
        imgLinkHref="foo"
        imgLinkAnalytics="bar"
        imgLinkIdString="baz"
        imgSrc="foobar"
        mediaRev
      />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.find('[href="foo"]').length).toBe(1);
    expect(link.find('[data-analytics="bar"]').length).toBe(1);
    expect(link.find('[data-id="baz"]').length).toBe(1);
  });

  it('should render a link with the correct classes when imgSrc and additionalClassesImgLink are provided in the reversed variant', () => {
    const wrapper = mount(
      <SprkPromo
        additionalClassesImgLink="bobsClass"
        imgSrc="foobar"
        mediaRev
      />,
    );
    const link = wrapper.find('a.sprk-b-Link--plain');

    expect(link.length).toBe(1);
    expect(link.hasClass('sprk-o-Stack__item--half@s')).toBe(true);
    expect(link.hasClass('sprk-o-Stack__item')).toBe(true);
    expect(link.hasClass('bobsClass')).toBe(true);
  });

  it('should render with the image on the left if mediaRev is not provided', () => {
    const wrapper = mount(<SprkPromo imgSrc="foo" />);
    const promoNodes = wrapper.find('div.sprk-c-Promo').children();

    expect(promoNodes.first().name()).toEqual('SprkLink');
    expect(promoNodes.last().hasClass('sprk-c-Promo__content')).toBe(true);
  });

  it('should render with the image on the right if mediaRev is provided', () => {
    const wrapper = mount(<SprkPromo imgSrc="foo" mediaRev />);
    const promoNodes = wrapper.find('div.sprk-c-Promo').children();

    expect(promoNodes.first().hasClass('sprk-c-Promo__content')).toBe(true);
    expect(promoNodes.last().name()).toEqual('SprkLink');
  });
});
