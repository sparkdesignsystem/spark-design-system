import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkCardModule } from './sprk-card.module';
import { SprkCardContentModule } from './directives/sprk-card-content/sprk-card-content.module';
import { SprkCardHeaderModule } from './directives/sprk-card-header/sprk-card-header.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkCardComponent } from './sprk-card.component';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkTextModule } from '../../directives/sprk-text/sprk-text.module';
import { SprkHeadingModule } from '../../directives/sprk-heading/sprk-heading.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkCardMediaModule } from './directives/sprk-card-media/sprk-card-media.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
export default {
  title: 'Components/Card',
  component: SprkCardComponent,
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sprk-o-Box--large">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('card')}`,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkCardModule,
    SprkCardMediaModule,
    SprkStackModule,
    SprkCardContentModule,
    SprkStackItemModule,
    SprkHeadingModule,
    SprkCardHeaderModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    SprkTextModule,
    RouterModule.forRoot([
      {
        path: 'iframe.html',
        component: SprkCardComponent,
      },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card idString="default">
      <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
        <p sprkStackItem sprkText variant="bodyTwo">
          Default Card
        </p>
      </sprk-stack>
    </sprk-card>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    docs: { iframeHeight: 150 },
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
    ],
  },
};

export const legacyStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      cardType="base"
      idString="card-default"
    >
      <div class="
        sprk-o-Stack__item
        sprk-c-Card__content
        sprk-o-Stack
        sprk-o-Stack--medium">
        <p class="sprk-TypeBodyTwo">Default Card</p>
      </div>
    </sprk-card>
  `,
});

legacyStory.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['sprk-card.component'],
  },
};

export const standout = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card idString="standout" isStandout="true">
      <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
        <p sprkStackItem sprkText variant="bodyTwo">
          Standout Card
        </p>
      </sprk-stack>
    </sprk-card>
  `,
});

standout.story = {
  parameters: {
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
    ],
  },
};

export const legacyStandout = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      cardType="base"
      idString="card-standout"
      additionalClasses="sprk-c-Card--standout"
    >
      <div class="
        sprk-o-Stack__item
        sprk-c-Card__content
        sprk-o-Stack
        sprk-o-Stack--medium"
      >
        <p class="sprk-TypeBodyTwo">Standout Card</p>
      </div>
    </sprk-card>
  `,
});

legacyStandout.story = {
  name: 'Legacy Standout (Deprecated)',
  parameters: {
    jest: ['sprk-card.component'],
  },
};

export const highlightedHeader = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card idString="highlighted-header" isStandout="true">
      <sprk-stack sprkCardHeader sprkStackItem itemSpacing="medium">
        <h3
          sprkHeading
          sprkStackItem
          variant="displaySeven"
          class="sprk-u-Color--white"
        >
          Description
        </h3>

        <h4
          sprkHeading
          sprkStackItem
          variant="displayFive"
          class="sprk-u-Color--white"
        >
          Card Title
        </h4>
      </sprk-stack>

      <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
        <p sprkStackItem sprkText variant="bodyTwo">
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
          perpetua an pri, errem commune mea at, mei prima tantas
          signiferumque at. Numquam.
        </p>
      </sprk-stack>
    </sprk-card>
  `,
});

highlightedHeader.story = {
  name: 'Highlighted Header',
  parameters: {
    docs: { iframeHeight: 300 },
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
      'sprk-heading.directive',
    ],
  },
};

export const legacyHighlightedHeader = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      cardType="base"
      idString="card-highlighted-header"
      additionalClasses="sprk-c-Card--standout"
    >
      <div class="
        sprk-o-Stack__item
        sprk-c-Card__header
        sprk-o-Stack
        sprk-o-Stack--medium">
        <h3 class="
          sprk-b-TypeDisplaySeven
          sprk-o-Stack__item
          sprk-u-Color--white">
          Description
        </h3>

        <h4 class="
          sprk-b-TypeDisplayFive
          sprk-o-Stack__item
          sprk-u-Color--white">
          Card Title
        </h4>
      </div>

      <div class="
        sprk-o-Stack__item
        sprk-o-Stack
        sprk-o-Stack--medium
        sprk-c-Card__content">
        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
          perpetua an pri, errem commune mea at, mei prima tantas
          signiferumque at. Numquam.
        </p>
      </div>
    </sprk-card>
  `,
});

legacyHighlightedHeader.story = {
  name: 'Legacy Highlighted Header (Deprecated)',
  parameters: {
    docs: { iframeHeight: 300 },
    jest: ['sprk-card.component'],
  },
};

export const teaser = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card idString="teaser">
      <a
        sprkLink
        variant="unstyled"
        href="#nogo"
        sprkStackItem
        analyticsString="teaser-media"
      >
        <img
          sprkCardMedia
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </a>

      <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
        <h3 sprkHeading variant="displayFive" sprkStackItem>
          Title
        </h3>

        <p sprkText variant="bodytwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.
        </p>

        <div sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            class="sprk-c-Button sprk-c-Button--secondary"
            analyticsString="teaser-cta"
          >
            Learn More
          </a>
        </div>
      </sprk-stack>
    </sprk-card>
 `,
});

teaser.story = {
  name: 'Teaser',
  parameters: {
    docs: { iframeHeight: 550 },
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-card-media.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
      'sprk-heading.directive',
      'sprk-link.directive',
    ],
  },
};

export const legacyTeaser = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      media="img"
      cardType="teaser"
      title="Title"
      body="Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua."
      imgSrc="https://spark-assets.netlify.app/desktop.jpg"
      imgAlt="Learn more"
      imgHref="#nogo"
      ctaType="button"
      ctaText="Learn More"
      ctaHref="#nogo"
      ctaAnalytics="Button: Spark"
      additionalCtaClasses="sprk-c-Button--secondary"
      idString="card-teaser"
    >
    </sprk-card>
 `,
});

legacyTeaser.story = {
  name: 'Legacy Teaser (Deprecated)',
  parameters: {
    docs: { iframeHeight: 550 },
    jest: ['sprk-card.component'],
  },
};

export const teaserIcon = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card idString="teaser-icon">
      <sprk-stack
        sprkCardContent
        itemSpacing="large"
        sprkStackItem
        additionalClasses="sprk-u-TextAlign--center"
      >
        <a
          sprkLink
          variant="unstyled"
          href="#nogo"
          sprkStackItem
          analyticsString="teaser-icon-media"
          class="sprk-u-AbsoluteCenter"
        >
          <sprk-icon
            iconName="call-team-member"
            additionalClasses="sprk-c-Icon--xl"
          ></sprk-icon>
        </a>

        <h3 sprkHeading variant="displayFive" sprkStackItem>
          Title
        </h3>

        <p sprkText variant="bodytwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua an
          pri, errem communemea at, mei prima
          tantas signiferumque at.
        </p>

        <div sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            class="sprk-c-Button sprk-c-Button--secondary"
            analyticsString="teaser-icon-cta"
          >
            Learn More
          </a>
        </div>
      </sprk-stack>
    </sprk-card>
 `,
});

teaserIcon.story = {
  name: 'Teaser With Icon',
  parameters: {
    docs: { iframeHeight: 550 },
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
      'sprk-heading.directive',
      'sprk-link.directive',
      'sprk-icon.component',
    ],
  },
};

export const teaserWithDifferentElementOrder = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card idString="teaser-diff-order">
      <h3 sprkHeading sprkCardContent variant="displayFive" sprkStackItem>
        Title
      </h3>

      <a
        sprkLink
        variant="unstyled"
        href="#nogo"
        sprkStackItem
        analyticsString="teaser-diff-order-media"
      >
        <img
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </a>

      <sprk-stack sprkCardContent itemSpacing="large" sprkStackItem>
        <p sprkText variant="bodytwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.
        </p>

        <div sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            class="sprk-c-Button sprk-c-Button--secondary"
            analyticsString="teaser-diff-order-cta"
          >
            Learn More
          </a>
        </div>
      </sprk-stack>
    </sprk-card>
  `,
});

teaserWithDifferentElementOrder.story = {
  name: 'Teaser With Different Element Order',
  parameters: {
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-card-media.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
      'sprk-heading.directive',
      'sprk-link.directive',
    ],
    docs: {
      iframeHeight: 550,
    },
  },
};

export const twoUpCards = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      itemSpacing="large"
      splitAt="large"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            analyticsString="two-up-media"
            href="#nogo"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                class="sprk-c-Button sprk-c-Button--secondary"
                analyticsString="two-up-cta"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="two-up-media-2"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                class="sprk-c-Button sprk-c-Button--secondary"
                analyticsString="two-up-cta-2"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>
    </sprk-stack>
  `,
});

twoUpCards.story = {
  name: 'Card Layout - Two Up',
  parameters: {
    docs: { iframeHeight: 600 },
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-card-media.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
      'sprk-heading.directive',
      'sprk-link.directive',
    ],
  },
};

export const legacyTwoUpCards = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      itemSpacing="large"
      splitAt="large"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card
          cardType="teaser"
          media="img"
          idString="card-two-up-1"
          imgSrc="https://spark-assets.netlify.app/desktop.jpg"
          imgAlt="Learn more"
          body="This Lorem ipsum dolor sit amet, doctus invenire vix te.
            Facilisi perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam."
          ctaType="button"
          additionalCtaClasses="sprk-c-Button--secondary"
          ctaText="Learn More"
          title="Title"
          sprkStackItem
        ></sprk-card>
      </div>
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card
          cardType="teaser"
          media="img"
          idString="card-two-up-2"
          imgSrc="https://spark-assets.netlify.app/desktop.jpg"
          imgAlt="Learn more"
          body="This Lorem ipsum dolor sit amet, doctus invenire vix
            te. Facilisi perpetua an pri, errem commune mea at, mei
            prima tantas signiferumque at. Numquam."
          ctaType="button"
          additionalCtaClasses="sprk-c-Button--secondary"
          ctaText="Learn More"
          title="Title"
          sprkStackItem
        ></sprk-card>
      </div>
    </sprk-stack>
  `,
});

legacyTwoUpCards.story = {
  name: 'Legacy Card Layout - Two Up (Deprecated)',
  parameters: {
    docs: { iframeHeight: 600 },
    jest: ['sprk-card.component'],
  },
};

export const threeUpCards = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      itemSpacing="large"
      splitAt="large"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="three-up-media"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="three-up-cta"
                class="sprk-c-Button sprk-c-Button--secondary"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="three-up-media-2"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="three-up-cta-2"
                class="sprk-c-Button sprk-c-Button--secondary"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="three-up-media-3"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="three-up-cta-3"
                class="sprk-c-Button sprk-c-Button--secondary"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>
    </sprk-stack>
  `,
});

threeUpCards.story = {
  name: 'Card Layout - Three Up',
  parameters: {
    docs: { iframeHeight: 600 },
    jest: [
      'sprk-card.component',
      'sprk-card-media.directive',
      'sprk-card-content.directive',
      'sprk-stack.component',
      'sprk-stack-item.directive',
      'sprk-text.directive',
      'sprk-heading.directive',
      'sprk-link.directive',
    ],
  },
};

export const legacyThreeUpCards = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-stack
     itemSpacing="large"
     splitAt="large"
     additionalClasses="sprk-o-Stack--center-row"
   >
     <div
       class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
       sprkStackItem
     >
       <sprk-card
         cardType="teaser"
         idString="card-three-up-1"
         media="img"
         imgSrc="https://spark-assets.netlify.app/desktop.jpg"
         imgAlt="Learn more"
         body="This Lorem ipsum dolor sit amet, doctus invenire vix te.
           Facilisi perpetua an pri, errem commune mea at, mei prima
           tantas signiferumque at. Numquam."
         ctaType="button"
         ctaText="Learn More"
         additionalCtaClasses="sprk-c-Button--secondary"
         title="Title"
         sprkStackItem
       ></sprk-card>
      </div>
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card
          cardType="teaser"
          media="img"
          idString="card-three-up-2"
          imgSrc="https://spark-assets.netlify.app/desktop.jpg"
          imgAlt="Learn more"
          body="This Lorem ipsum dolor sit amet, doctus invenire vix
            te. Facilisi perpetua an pri, errem commune mea at, mei
            prima tantas signiferumque at. Numquam."
          ctaType="button"
          ctaText="Learn More"
          title="Title"
          additionalCtaClasses="sprk-c-Button--secondary"
          sprkStackItem
        ></sprk-card>
      </div>
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card
          cardType="teaser"
          additionalCtaClasses="sprk-c-Button--secondary"
          media="img"
          idString="card-three-up-3"
          imgSrc="https://spark-assets.netlify.app/desktop.jpg"
          imgAlt="Learn more"
          body="This Lorem ipsum dolor sit amet, doctus invenire vix
            te. Facilisi perpetua an pri, errem commune mea at, mei
            prima tantas signiferumque at. Numquam."
          ctaType="button"
          ctaText="Learn More"
          title="Title"
          sprkStackItem
        ></sprk-card>
      </div>
    </sprk-stack>
  `,
});

legacyThreeUpCards.story = {
  name: 'Legacy Card Layout - Three Up (Deprecated)',
  parameters: {
    docs: { iframeHeight: 600 },
    jest: ['sprk-card.component'],
  },
};

export const fourUpCards = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      itemSpacing="large"
      splitAt="large"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="four-up-cta"
                class="sprk-c-Button sprk-c-Button--secondary"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="four-up-media-2"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="four-up-cta-2"
                class="sprk-c-Button sprk-c-Button--secondary"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media-3"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                analyticsString="four-up-cta-3"
                href="#nogo"
                class="sprk-c-Button sprk-c-Button--secondary"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="four-up-media-4"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodytwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="four-up-cta-4"
                class="sprk-c-Button sprk-c-Button--secondary"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-card>
      </div>
    </sprk-stack>
  `,
});

fourUpCards.story = {
  name: 'Card Layout - Four Up',
  parameters: {
    docs: { iframeHeight: 600 },
    jest: [
      'sprk-card.component',
      'sprk-card-content.directive',
      'sprk-stack.component',
      'sprk-card-media.directive',
      'sprk-stack-item.directive',
      'sprk-text.directive',
      'sprk-heading.directive',
      'sprk-link.directive',
    ],
  },
};

export const legacyFourUpCards = () => ({
  moduleMetadata: modules,
  template: `
   <sprk-stack
     itemSpacing="large"
     splitAt="large"
     additionalClasses="sprk-o-Stack--center-row"
   >
     <div
       class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
       sprkStackItem
     >
       <sprk-card
         cardType="teaser"
         additionalCtaClasses="sprk-c-Button--secondary"
         media="img"
         idString="card-four-up-1"
         imgAlt="Learn more"
         imgSrc="https://spark-assets.netlify.app/desktop.jpg"
         body="This Lorem ipsum dolor sit amet, doctus invenire vix te.
           Facilisi perpetua an pri, errem commune mea at, mei prima
           tantas signiferumque at. Numquam."
         ctaType="button"
         ctaText="Learn More"
         title="Title"
         sprkStackItem
       ></sprk-card>
      </div>
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card
          cardType="teaser"
          additionalCtaClasses="sprk-c-Button--secondary"
          media="img"
          idString="card-four-up-2"
          imgAlt="Learn more"
          imgSrc="https://spark-assets.netlify.app/desktop.jpg"
          body="This Lorem ipsum dolor sit amet, doctus invenire vix
            te. Facilisi perpetua an pri, errem commune mea at, mei
            prima tantas signiferumque at. Numquam."
          ctaType="button"
          ctaText="Learn More"
          title="Title"
          sprkStackItem
        ></sprk-card>
      </div>
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card
          cardType="teaser"
          additionalCtaClasses="sprk-c-Button--secondary"
          media="img"
          idString="card-four-up-3"
          imgAlt="Learn more"
          imgSrc="https://spark-assets.netlify.app/desktop.jpg"
          body="This Lorem ipsum dolor sit amet, doctus invenire vix
            te. Facilisi perpetua an pri, errem commune mea at, mei
            prima tantas signiferumque at. Numquam."
          ctaType="button"
          ctaText="Learn More"
          title="Title"
          sprkStackItem
        ></sprk-card>
      </div>
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card
          cardType="teaser"
          additionalCtaClasses="sprk-c-Button--secondary"
          media="img"
          idString="card-four-up-4"
          imgAlt="Learn more"
          imgSrc="https://spark-assets.netlify.app/desktop.jpg"
          body="This Lorem ipsum dolor sit amet, doctus invenire vix
            te. Facilisi perpetua an pri, errem commune mea at, mei
            prima tantas signiferumque at. Numquam."
          ctaType="button"
          ctaText="Learn More"
          title="Title"
          sprkStackItem
         ></sprk-card>
      </div>
    </sprk-stack>
  `,
});

legacyFourUpCards.story = {
  name: 'Legacy Card Layout - Four Up (Deprecated)',
  parameters: {
    docs: { iframeHeight: 600 },
    jest: ['sprk-card.component'],
  },
};
