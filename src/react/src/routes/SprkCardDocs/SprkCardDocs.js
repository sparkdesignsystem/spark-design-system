import React from 'react';
import { SprkCard } from '@sparkdesignsystem/spark-react';
import { Link } from 'react-router-dom';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkCardDocs = () => {
  const testHighlightedHeaderConfig = {
    bodyText: `Highlight header card body text.
        Lorem ipsum dolor sit amet, doctus invenire vix te.
        Facilisi perpetua an pri, errem commune mea at,
        mei prima tantas signiferumque at.
        Numquam.`,
    title: 'Highlight Header Card Title',
    description: 'Highlight Header Description',
  };

  const stackedTeaserImage = {
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
      imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
      mediaAnalyticsString: 'Card:teaser-link',
      mediaVariant: 'img',
    },
    title: 'Teaser Card Title',
    titleFirst: false,
  };

  const stackedTeaserIcon = {
    bodyText: 'Body text of a teaser card.',
    cta: {
      ctaAnalytics: 'test',
      text: 'Learn More',
      ctaVariant: 'link',
      href: 'https://sparkdesignsystem.com/',
    },
    media: {
      additionalMediaIconClasses: 'sprk-c-Icon--xxl',
      href: 'https://sparkdesignsystem.com/',
      mediaLinkElement: 'a',
      iconName: 'call-team-member',
      mediaVariant: 'icon',
    },
    title: 'Teaser Card Title',
    titleFirst: false,
  };

  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Base Card</h3>
        <SprkCard
          additionalContentClasses="
            sprk-o-Stack
            sprk-o-Stack--large"
        >
          Base Card Content
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Standout Card</h3>
        <SprkCard
          isStandout
          additionalContentClasses="
            sprk-o-Stack
            sprk-o-Stack--medium"
        >
          Standout Card Content
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card with Highlighted Header
        </h3>
        <SprkCard
          highlightedHeaderConfig={testHighlightedHeaderConfig}
          idString="card-with-highlighted-header"
          isStandout
          variant="highlightedHeader"
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Image / Anchor / Link
        </h3>
        <SprkCard
          idString="test"
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
              imgSrc:
                'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'img',
            },
            title: 'Teaser Card Title',
            titleFirst: false,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Image / Anchor / Button
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'button',
              href: 'https://sparkdesignsystem.com/',
            },
            media: {
              href: 'https://sparkdesignsystem.com/',
              mediaLinkElement: 'a',
              imgAlt: 'placeholder image',
              imgSrc:
                'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'img',
            },
            title: 'Teaser Card Title',
            titleFirst: false,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Image / Router / Button
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'button',
              ctaLinkElement: Link,
              to: '/cards',
            },
            media: {
              href: 'https://sparkdesignsystem.com/',
              mediaLinkElement: 'a',
              imgAlt: 'placeholder image',
              imgSrc:
                'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'img',
            },
            title: 'Teaser Card Title',
            titleFirst: false,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Icon / Router link / Link
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'link',
              ctaLinkElement: Link,
              to: '/cards',
            },
            media: {
              additionalMediaIconClasses: 'sprk-c-Icon--xxl',
              to: 'https://sparkdesignsystem.com/',
              mediaLinkElement: Link,
              iconName: 'call-team-member',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'icon',
            },
            title: 'Teaser Card Title',
            titleFirst: false,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Icon / Router link / Button
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'button',
              ctaLinkElement: Link,
              to: 'https://sparkdesignsystem.com/',
            },
            media: {
              additionalMediaIconClasses: 'sprk-c-Icon--xxl',
              to: 'https://sparkdesignsystem.com/',
              mediaLinkElement: Link,
              iconName: 'call-team-member',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'icon',
            },
            title: 'Teaser Card Title',
            titleFirst: false,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Icon / Anchor / Link
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'link',
              ctaLinkElement: 'a',
              href: 'https://sparkdesignsystem.com/',
            },
            media: {
              additionalMediaIconClasses: 'sprk-c-Icon--xxl',
              href: 'https://sparkdesignsystem.com/',
              mediaLinkElement: 'a',
              iconName: 'call-team-member',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'icon',
            },
            title: 'Teaser Card Title',
            titleFirst: false,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Icon / Router Link / Link with Icon
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'link',
              ctaIcon: 'chevron-right',
              ctaLinkElement: Link,
              to: 'https://sparkdesignsystem.com/',
            },
            media: {
              additionalMediaIconClasses: 'sprk-c-Icon--xxl',
              to: 'https://sparkdesignsystem.com/',
              mediaLinkElement: Link,
              iconName: 'call-team-member',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'icon',
            },
            title: 'Teaser Card Title',
            titleFirst: false,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Title First / Image / Button
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'button',
              href: 'https://sparkdesignsystem.com/',
            },
            media: {
              href: 'https://sparkdesignsystem.com/',
              mediaLinkElement: 'a',
              imgAlt: 'placeholder image',
              imgSrc:
                'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'img',
            },
            title: 'Teaser Card Title',
            titleFirst: true,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Title First / Icon / Button
        </h3>
        <SprkCard
          idString="test"
          variant="teaser"
          teaserConfig={{
            bodyText: 'Body text of a teaser card.',
            cta: {
              ctaAnalytics: 'test',
              text: 'Learn More',
              ctaVariant: 'button',
              href: 'https://sparkdesignsystem.com/',
            },
            media: {
              additionalMediaIconClasses: 'sprk-c-Icon--xxl',
              href: 'https://sparkdesignsystem.com/',
              mediaLinkElement: 'a',
              iconName: 'call-team-member',
              imgAlt: 'placeholder image',
              imgSrc:
                'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
              mediaAnalyticsString: 'Card:teaser-link',
              mediaVariant: 'icon',
            },
            title: 'Teaser Card Title',
            titleFirst: true,
          }}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card Layout - Two Up
        </h3>
        <section
          className="
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-o-Stack--split@l"
        >
          <SprkCard
            idString="1"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
            teaserConfig={stackedTeaserImage}
          />
          <SprkCard
            idString="2"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
            teaserConfig={stackedTeaserImage}
          />
        </section>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card Layout - Three Up
        </h3>
        <section
          className="
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-o-Stack--split@l"
        >
          <SprkCard
            idString="card-1"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
            teaserConfig={stackedTeaserIcon}
          />
          <SprkCard
            idString="card-2"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
            teaserConfig={stackedTeaserIcon}
          />
          <SprkCard
            idString="card-3"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
            teaserConfig={stackedTeaserIcon}
          />
        </section>
      </ExampleContainer>
      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card Layout - Four Up
        </h3>
        <section
          className="
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-o-Stack--split@xl"
        >
          <SprkCard
            idString="1"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xl"
            teaserConfig={stackedTeaserImage}
          />
          <SprkCard
            idString="2"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xl"
            teaserConfig={stackedTeaserImage}
          />
          <SprkCard
            idString="3"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xl"
            teaserConfig={stackedTeaserImage}
          />
          <SprkCard
            idString="4"
            variant="teaser"
            additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xl"
            teaserConfig={stackedTeaserImage}
          />
        </section>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkCardDocs;
