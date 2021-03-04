import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Card',
  decorators: [
    (story) => `<div class="sprk-o-Box sprk-o-Box--large">${story()}</div>`,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('card')}
    `,
    docs: { iframeHeight: 200 },
  },
};

export const defaultStory = () =>
  `
    <div
      class="sprk-c-Card sprk-o-Stack"
      data-id="default-card"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack
          sprk-o-Stack--large
        "
        >
        Base Card Content
      </div>
    </div>
  `;

defaultStory.story = {
  name: 'Default',
  parameters: {
    docs: { iframeHeight: 150 },
  },
};

export const standout = () =>
  `
    <div
      class="
        sprk-c-Card
        sprk-c-Card--standout
        sprk-o-Stack
      "
      data-id="standout"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack sprk-o-Stack--medium
        "
      >
        Standout Card Content
      </div>
    </div>
  `;

export const highlightedHeader = () =>
  `
    <div
      class="sprk-c-Card sprk-c-Card--standout sprk-o-Stack"
      data-id="highlighted-header"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__header
          sprk-o-Stack
          sprk-o-Stack--medium
        "
      >
        <h3
          class="
            sprk-b-TypeDisplaySeven
            sprk-o-Stack__item
            sprk-u-Color--white
          "
        >
          Description
        </h3>

        <h4
          class="
            sprk-b-TypeDisplayFive sprk-o-Stack__item
            sprk-u-Color--white
          "
        >
          Card Title
        </h4>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack sprk-o-Stack--medium
          sprk-c-Card__content
        "
      >
        <p
          class="sprk-b-TypeBodyTwo sprk-o-Stack__item"
        >
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
          perpetua an pri, errem commune mea at, mei prima tantas
          signiferumque at. Numquam.
        </p>
      </div>
    </div>
  `;

highlightedHeader.story = {
  name: 'Highlighted Header',
  parameters: {
    docs: { iframeHeight: 300 },
  },
};

export const teaser = () =>
  `
    <div
      class="sprk-c-Card sprk-o-Stack"
      data-id="teaser-card"
    >
      <a href="#nogo" class="sprk-o-Stack__item">
        <img
          class="sprk-c-Card__media"
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        >
      </a>

      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack sprk-o-Stack--large
        "
      >
        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
          Title
        </h3>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet,
          doctus invenire vix te.
          Facilisi perpetua an pri,
          errem commune mea at, mei
          prima tantas signiferumque at. Numquam.
        </p>

        <div class="sprk-o-Stack__item">
          <a href="#nogo" class="sprk-c-Button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  `;

teaser.story = {
  parameters: {
    docs: { iframeHeight: 550 },
  },
};

export const teaserWithDifferentElementOrder = () =>
  `
    <div
      class="sprk-c-Card sprk-o-Stack"
      data-id="teaser-diff-order"
    >
      <h3
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-b-TypeDisplayFive
          "
        >
        Teaser Card Title
      </h3>

      <a href="#nogo" class="sprk-o-Stack__item">
        <img
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg" />
      </a>

      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack
          sprk-o-Stack--large
        "
      >
        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet, doctus invenire
          vix te. Facilisi perpetua an pri, errem commune
          mea at, mei prima tantas signiferumque at. Numquam.
        </p>

        <div class="sprk-o-Stack__item">
          <a href="#nogo" class="sprk-c-Button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  `;

teaserWithDifferentElementOrder.story = {
  name: 'Teaser With Different Element Order',
  parameters: {
    docs: { iframeHeight: 550 },
  },
};

export const twoUpCards = () =>
  `
    <div
      class="
        sprk-o-Stack
        sprk-o-Stack--large
        sprk-o-Stack--split@l
      "
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="two-up-card-1"
      >
        <a
          href="#nogo"
          class="sprk-o-Stack__item"
        >
          <img
            class="sprk-c-Card__media"
            alt="Learn more"
            src="https://spark-assets.netlify.app/desktop.jpg"
          >
        </a>

        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
          >
          <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
            Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet, doctus
            invenirevix te. Facilisi perpetua an pri,
            errem communemea at, mei prima
            tantas signiferumque at. Numquam.
          </p>

          <a
            href="#nogo"
            class="
              sprk-o-Stack__item
              sprk-b-Link
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#arrow-right" />
            </svg>
          </a>
        </div>
    </div>

    <div
      class="
        sprk-o-Stack__item
        sprk-o-Stack__item--flex@l
        sprk-c-Card sprk-o-Stack
      "
      data-id="two-up-card-2"
    >
      <a href="#nogo" class="sprk-o-Stack__item">
        <img
          class="sprk-c-Card__media"
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg">
      </a>

      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack sprk-o-Stack--large
        "
      >
        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
          Title
        </h3>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet,
          doctus invenirevix te.
          Facilisi perpetua an pri, errem
          communemea at, mei prima tantas
          signiferumque at.
          Numquam.
        </p>

        <a
          href="#nogo"
          class="
            sprk-o-Stack__item
            sprk-b-Link
            sprk-b-Link--has-icon
          "
        >
          Learn More
          <svg class="sprk-c-Icon" viewBox="0 0 64 64">
            <use xlink:href="#arrow-right" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  `;

twoUpCards.story = {
  name: 'Card Layout - Two Up',
  parameters: {
    docs: { iframeHeight: 600 },
  },
};

export const threeUpCards = () =>
  `
    <div class="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card sprk-o-Stack
        "
        data-id="card-three-up-1"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-u-TextAlign--center
          "
        >
          <a href="#nogo" class="sprk-u-AbsoluteCenter sprk-o-Stack__item" aria-label="Icon Title">
            <svg
              aria-hidden="true"
              class="
                sprk-c-Icon
                sprk-c-Icon--xl
              "
              height="75"
              viewBox="0 0 220.63 197.62"
            >
              <use xlink:href="#call-team-member" />
            </svg>
          </a>

          <h3
            class="
              sprk-b-TypeDisplayFive
              sprk-o-Stack__item
            "
          >
            Icon Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te.
            Facilisi perpetua an pri,
            errem communemea at, mei
            prima tantas signiferumque at.
          </p>

          <a
            href="#nogo"
            class="
              sprk-o-Stack__item
              sprk-b-Link
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#arrow-right" />
            </svg>
          </a>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-three-up-2"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-u-TextAlign--center
          "
        >
          <a href="#nogo" class="sprk-u-AbsoluteCenter sprk-o-Stack__item" aria-label="Icon Title">
            <svg
              class="
                sprk-c-Icon
                sprk-c-Icon--xl"
              height="75"
              aria-hidden="true"
              viewBox="0 0 220.63 197.62"
            >
              <use xlink:href="#call-team-member" />
            </svg>
          </a>

          <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
            Icon Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet, doctus
            invenirevix te. Facilisi perpetua an
            pri, errem communemea at, mei prima
            tantas signiferumque at.
          </p>

          <a
            href="#nogo"
            class="
              sprk-o-Stack__item
              sprk-b-Link
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#arrow-right" />
            </svg>
          </a>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card sprk-o-Stack
        "
        data-id="card-three-up-3"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-u-TextAlign--center
          "
        >
          <a
            href="#nogo"
            class="sprk-u-AbsoluteCenter sprk-o-Stack__item"
            aria-label="Icon Title"
          >
            <svg
              aria-hidden="true"
              class="
                sprk-c-Icon
                sprk-c-Icon--xl"
              height="75" viewBox="0 0 220.63 197.62">
              <use xlink:href="#call-team-member" />
            </svg>
          </a>

          <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
            Icon Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit
            amet, doctus invenirevix te.
            Facilisi perpetua an pri,
            errem communemea at, mei
            prima tantas signiferumque at.
          </p>

          <a href="#nogo"
            class="
              sprk-o-Stack__item
              sprk-b-Link
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#arrow-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;

threeUpCards.story = {
  name: 'Card Layout - Three Up',
  parameters: {
    docs: { iframeHeight: 600 },
  },
};

export const fourUpCards = () =>
  `
    <div
      class="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@xl"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-four-up-1"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit
            amet, doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#nogo" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card sprk-o-Stack
        "
        data-id="card-four-up-2"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#nogo" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-four-up-3"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#nogo" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-four-up-4"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#nogo" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

fourUpCards.story = {
  name: 'Card Layout - Four Up',
  parameters: {
    docs: { iframeHeight: 600 },
  },
};
