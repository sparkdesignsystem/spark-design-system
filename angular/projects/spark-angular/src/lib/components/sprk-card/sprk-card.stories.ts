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
    SprkStackModule,
    SprkCardContentModule,
    SprkStackItemModule,
    SprkHeadingModule,
    SprkCardHeaderModule,
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
  <sprk-card idString="new-card">
    <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
      <p sprkStackItem sprkText variant="bodyTwo">
        New Default Card. This works without the cardType="base" because
        we have ng-content running for when cardType=base
        but we also have the default cardType set to base if not supplied.
      </p>
    </sprk-stack>
  </sprk-card>

  <sprk-card
    cardType="base"
    idString="card-default"
  >
    <div class="
      sprk-o-Stack__item
      sprk-c-Card__content
      sprk-o-Stack
      sprk-o-Stack--medium">
      Old Card
    </div>
  </sprk-card>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    docs: { iframeHeight: 150 },
    jest: ['sprk-card.component'],
  },
};

export const standout = () => ({
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
        sprk-o-Stack--medium">Standout Card Content</div>
    </sprk-card>

    <sprk-card idString="standout" isStandout="true">
      <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
        <p sprkStackItem sprkText variant="bodyTwo">
          New Standout Card
        </p>
      </sprk-stack>
    </sprk-card>
  `,
});

standout.story = {
  parameters: {
    jest: ['sprk-card.component'],
  },
};

export const highlightedHeader = () => ({
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
        New highlighted header Card.
      </p>
    </sprk-stack>
  </sprk-card>
  `,
});

highlightedHeader.story = {
  name: 'Highlighted Header',
  parameters: {
    docs: { iframeHeight: 300 },
    jest: ['sprk-card.component'],
  },
};

export const teaser = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      media="img"
      cardType="teaser"
      title="Teaser Card Title"
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

    <sprk-card idString="card-teaser">
      <a
        sprkLink
        variant="unstyled"
        routerLink="/test"
        sprkStackItem
        analyticsString="img-link-analytics"
      >
        <img
          class="sprk-c-Card__media"
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </a>

      <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
        <h3 sprkHeading variant="displayFive" sprkStackItem>
          New Teaser Card
        </h3>

        <p sprkText variant="bodytwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.
          This card words because it falls into
          the ng-content catch because the default
          cardType is base which allows for ng-content.
          The old one works still because we did not remove
          the old cardType input from the component.
        </p>

        <div sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            routerLink="/test"
            class="sprk-c-Button sprk-c-Button--secondary"
            analyticsString="test-cta"
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
    jest: ['sprk-card.component'],
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

  <sprk-stack
    itemSpacing="large"
    splitAt="large"
    additionalClasses="sprk-o-Stack--center-row"
   >
    <sprk-card sprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <a
        sprkLink
        variant="unstyled"
        routerLink="/test"
        sprkStackItem
        analyticsString="img-link-analytics"
      >
        <img
          class="sprk-c-Card__media"
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </a>

      <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
        <h3 sprkHeading variant="displayFive" sprkStackItem>
          New Teaser Card
        </h3>

        <p sprkText variant="bodytwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.
          This card words because it falls into
          the ng-content catch because the default
          cardType is base which allows for ng-content.
          The old one works still because we did not remove
          the old cardType input from the component.
        </p>

        <div sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            routerLink="/test"
            class="sprk-c-Button sprk-c-Button--secondary"
            analyticsString="test-cta"
          >
            Learn More
          </a>
        </div>
      </sprk-stack>
    </sprk-card>

    <sprk-card sprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <a
        sprkLink
        variant="unstyled"
        routerLink="/test"
        sprkStackItem
        analyticsString="img-link-analytics"
      >
        <img
          class="sprk-c-Card__media"
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </a>

      <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
        <h3 sprkHeading variant="displayFive" sprkStackItem>
          New Teaser Card
        </h3>

        <p sprkText variant="bodytwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.
          This card words because it falls into
          the ng-content catch because the default
          cardType is base which allows for ng-content.
          The old one works still because we did not remove
          the old cardType input from the component.
        </p>

        <div sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            routerLink="/test"
            class="sprk-c-Button sprk-c-Button--secondary"
            analyticsString="test-cta"
          >
            Learn More
          </a>
        </div>
      </sprk-stack>
    </sprk-card>
  </sprk-stack>
  `,
});

twoUpCards.story = {
  name: 'Card Layout - Two Up',
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

threeUpCards.story = {
  name: 'Card Layout - Three Up',
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

fourUpCards.story = {
  name: 'Card Layout - Four Up',
  parameters: {
    docs: { iframeHeight: 600 },
    jest: ['sprk-card.component'],
  },
};
