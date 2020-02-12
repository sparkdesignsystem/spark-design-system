import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkCardModule } from './sprk-card.module';
import { SprkCardComponent } from './sprk-card.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Card',
  component: SprkCardComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
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
    SprkStackItemModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkCardComponent,
    }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
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
        Base Card Content
      </div>
    </sprk-card>
  `
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    docs: { iframeHeight: 150 },
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
  `
});

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
  </sprk-card>`
});

highlightedHeader.story = {
  name: 'Highlighted Header',
  parameters: {
    docs: { iframeHeight: 300 },
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
      imgSrc="https://spark-assets.netlify.com/desktop.jpg"
      imgAlt="Placeholder Image"
      imgHref="#nogo"
      ctaType="button"
      ctaText="Learn More"
      ctaHref="#nogo"
      ctaAnalytics="Button: Spark"
      additionalCtaClasses="sprk-c-Button--secondary"
      idString="card-teaser"
    >
    </sprk-card>
 `
});

teaser.story = {
  name: 'Teaser',
  parameters: {
    docs: { iframeHeight: 500 },
  },
};

export const teaserWithCtaIcon = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      media="img"
      cardType="teaser"
      title="Teaser Card Title"
      body="Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua."
      imgSrc="https://spark-assets.netlify.com/desktop.jpg"
      imgAlt="Placeholder Image"
      imgHref="#nogo"
      ctaType="link"
      ctaText="Learn More"
      ctaHref="#nogo"
      ctaAnalytics="Button: Spark"
      idString="card-teaser"
      ctaIcon="chevron-right"
    >
    </sprk-card>
 `
});

teaserWithCtaIcon.story = {
  name: 'Teaser w/ CTA Icon',
  parameters: {
    docs: { iframeHeight: 500 },
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
         imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
          imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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

twoUpCards.story = {
  name: 'Card Layout - Two Up',
  parameters: {
    docs: { iframeHeight: 600 },
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
         imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
          imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
          imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
         imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
          imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
          imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
          imgSrc="https://spark-assets.netlify.com/desktop.jpg"
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
  },
};
