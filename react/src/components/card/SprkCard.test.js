// eslint-disable-next-line no-unused-vars
/* global it expect beforeEach afterEach */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCard from './SprkCard';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCard:', () => {
  // Checks base card
  it('should display a Card div with the correct base classes', () => {
    const wrapper = shallow(<SprkCard />);
    expect(wrapper.find('.sprk-o-Stack').hasClass('sprk-c-Card')).toBe(true);
  });

  // Checks that children render inside of base card
  it('should display children inside of Card', () => {
    const testVariable = <p>test</p>;
    const wrapper = mount(<SprkCard>{testVariable}</SprkCard>);
    const hasChildren = wrapper.find('GetCardContent p').contains('test');
    expect(hasChildren).toBe(true);
  });

  // Tests standout variant
  it('should display a Card div with the correct standout classes', () => {
    const wrapper = shallow(<SprkCard isStandout />);
    expect(wrapper.find('.sprk-c-Card').hasClass('sprk-c-Card--standout')).toBe(
      true,
    );
  });

  it('should not add standout class if isStandout is false', () => {
    const wrapper = shallow(<SprkCard isStandout={false} />);
    expect(wrapper.find('.sprk-c-Card').hasClass('sprk-c-Card--standout')).toBe(
      false,
    );
  });

  // If teaser, should load teaser card
  it('should load teaser if there is teaserConfig', () => {
    const wrapper = mount(
      <SprkCard
        variant="teaser"
        teaserConfig={{
          bodyText: 'Body text of a teaser card.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'link',
            href: 'https://sparkdesignsystem.com/',
          },
          media: {
            href: 'https://sparkdesignsystem.com/',
            mediaLinkElement: 'a',
            imgAlt: 'placeholder image',
            imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
            mediaAnalyticsString: 'Card:teaser-link',
            mediaVariant: 'img',
          },
          title: 'Teaser Card Title',
          titleFirst: false,
        }}
      />,
    );
    const loadsTeaserComponent =
      wrapper.find('GetCardContent SprkCardTeaser').length === 1;
    expect(loadsTeaserComponent).toBe(true);
  });

  it('should apply the correct class if mediaVariant is icon', () => {
    const wrapper = mount(
      <SprkCard
        variant="teaser"
        teaserConfig={{
          bodyText: 'Body text of a teaser card.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
            buttonVariant: 'tertiary',
            href: 'https://sparkdesignsystem.com/',
          },
          media: {
            href: 'https://sparkdesignsystem.com/',
            mediaLinkElement: 'a',
            imgAlt: 'placeholder image',
            imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
            mediaAnalyticsString: 'Card:teaser-link',
            mediaVariant: 'icon',
            iconName: 'bell',
          },
          title: 'Teaser Card Title',
          titleFirst: false,
        }}
      />,
    );
    expect(
      wrapper.find('.sprk-c-Card').hasClass('sprk-u-TextAlign--center'),
    ).toBe(true);
  });

  // If highlighted header, should load teaser card
  it(`should load highlighted header
      if there is highlightedHeaderConfig`, () => {
    const wrapper = mount(
      <SprkCard
        variant="highlightedHeader"
        highlightedHeaderConfig={{
          bodyText: `Highlight header card body text.
            Lorem ipsum dolor sit amet, doctus invenire vix te.
            Facilisi perpetua an pri, errem commune mea at,
            mei prima tantas signiferumque at. Numquam.`,
          title: 'Highlight Header Card Title',
          description: 'Highlight Header Description',
        }}
      />,
    );
    const loadsHighlightedHeaderComponent =
      wrapper.find('GetCardContent SprkCardHighlightedHeader').length === 1;
    expect(loadsHighlightedHeaderComponent).toBe(true);
  });
});
