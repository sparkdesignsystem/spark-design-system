import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Base</h2>
      <sprk-card cardType="base" idString="card-1">
        <div
          class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium"
        ></div>
      </sprk-card>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Sample Card</h2>
      <sprk-card cardType="base">
        <a href="#" class="sprk-o-Stack__item">
          <img
            class="sprk-c-Card__media"
            alt="Spark placeholder image."
            src="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          />
        </a>
        <div
          class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium"
        >
          <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">Test</h3>
          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            This is an example of the Card component.
          </p>
          <div class="sprk-o-Stack__item">
            <button sprkButton>Learn More</button>
          </div>
        </div>
      </sprk-card>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Teaser Card</h2>
      <sprk-card
        cardType="teaser"
        media="img"
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
        body="This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua an pri, errem commune
                   mea at, mei prima tantas signiferumque at. Numquam."
        ctaType="button"
        ctaText="Learn More"
        title="Title"
      ></sprk-card>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Two-Up</h2>
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
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix te.
                       Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
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
            media="img"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix
                       te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
            ctaType="button"
            ctaText="Learn More"
            title="Title"
            sprkStackItem
          ></sprk-card>
        </div>
      </sprk-stack>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Three-Up</h2>
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
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix
                       te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
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
            media="img"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix
                       te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
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
            media="img"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix
                       te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
            ctaType="button"
            ctaText="Learn More"
            title="Title"
            sprkStackItem
          ></sprk-card>
        </div>
      </sprk-stack>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Four-Up</h2>
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
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix te.
                       Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
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
            media="img"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix
                       te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
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
            media="img"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix
                       te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
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
            media="img"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            body="This Lorem ipsum dolor sit amet, doctus invenire vix
                       te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam."
            ctaType="button"
            ctaText="Learn More"
            title="Title"
            sprkStackItem
          ></sprk-card>
        </div>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Standout Card</h2>
      <sprk-card
        cardType="base"
        idString="card-20"
        additionalClasses="sprk-c-Card--standout"
      >
        <div
          class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium"
        ></div>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Standout Card Highlighted Header</h2>
      <sprk-card
        cardType="base"
        idString="card-12"
        additionalClasses="sprk-c-Card--standout"
      >
        <div
          class="sprk-o-Stack__item sprk-c-Card__header sprk-o-Stack sprk-o-Stack--medium"
        >
          <h3
            class="sprk-b-TypeDisplaySeven sprk-o-Stack__item sprk-u-Color--white"
          >
            Description
          </h3>

          <h4
            class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-u-Color--white"
          >
            Card Title
          </h4>
        </div>

        <div
          class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-c-Card__content"
        >
          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </p>
        </div>
      </sprk-card>
    </div>
  `,
  styles: ['']
})
export class CardDocsComponent {
  constructor() {}
}
