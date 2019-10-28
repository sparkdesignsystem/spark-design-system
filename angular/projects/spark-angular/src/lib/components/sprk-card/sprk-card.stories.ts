import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkCardModule } from './sprk-card.module';
import { SprkCardComponent } from './sprk-card.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';

export default {
  title: 'Components|Card',
  component: SprkCardModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
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
      <div class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium">
        Base Card Content
      </div>
    </sprk-card>
  `
});

defaultStory.story = {
  name: 'Default',
};

export const standout = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      cardType="base"
      idString="card-standout"
      additionalClasses="sprk-c-Card--standout"
    >
      <div class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium">Standout Card Content</div>
    </sprk-card>
  `
});

standout.story = {
  name: 'Standout',
};

export const highlightedHeader = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      cardType="base"
      idString="card-highlighted-header"
      additionalClasses="sprk-c-Card--standout"
    >
      <div class="sprk-o-Stack__item sprk-c-Card__header sprk-o-Stack sprk-o-Stack--medium">
        <h3 class="sprk-b-TypeDisplaySeven sprk-o-Stack__item sprk-u-Color--white">
          Description
        </h3>

        <h4 class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-u-Color--white">
          Card Title
        </h4>
      </div>

      <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-c-Card__content">
        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
          perpetua an pri, errem commune mea at, mei prima tantas
          signiferumque at. Numquam.
        </p>
      </div>
  </sprk-card>`
});

highlightedHeader.story = {
  name: 'Highlighted Header'
};

export const teaser = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-card
      media="img"
      cardType="teaser"
      title="Card Component"
      body="This is an example of the Card component. Here, you could write some paragraph text related to the card
        image."
      imgSrc="https://spark-assets.netlify.com/desktop.jpg"
      imgAlt="Placeholder Image"
      imgHref="www.sparkdesignsystem.com"
      ctaType="button"
      ctaText="Learn More"
      ctaHref="www.sparkdesignsystem.com"
      ctaAnalytics="Button: Spark"
      idString="card-teaser"
    >
    </sprk-card>
 `
});

teaser.story = {
  name: 'Teaser',
};

export const twoUp = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      splitAt="medium"
      itemSpacing="medium"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-two-up-1"
      >
      </sprk-card>
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-two-up-2"
      >
      </sprk-card>
    </sprk-stack>
  `,
});

twoUp.story = {
  name: 'Card Layout - Two Up',
};

export const threeUp = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      splitAt="medium"
      itemSpacing="medium"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-three-up-1"
      >
      </sprk-card>
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-three-up-2"
      >
      </sprk-card>
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-three-up-3"
      >
      </sprk-card>
    </sprk-stack>
  `,
});

threeUp.story = {
  name: 'Card Layout - Three Up'
};

export const fourUp = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      splitAt="medium"
      itemSpacing="medium"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-four-up-1"
      >
      </sprk-card>
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-four-up-2"
      >
      </sprk-card>
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-four-up-3"
      >
      </sprk-card>
      <sprk-card
        sprkStackItem
        media="img"
        cardType="teaser"
        title="Card Component"
        body="This is an example of the Card component. Here, you could write some paragraph text related to the card
          image."
        imgSrc="https://spark-assets.netlify.com/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn More"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-four-up-4"
      >
      </sprk-card>
    </sprk-stack>
  `,
});

fourUp.story = {
  name: 'Card Layout - Four Up',
};
