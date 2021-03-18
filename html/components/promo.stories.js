import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Promo',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('promo')}
    `,
    docs: { iframeHeight: 430 },
  },
};

export const defaultStory = () => `
  <div
    class="
      sprk-c-Promo
      sprk-c-Promo--bordered
      sprk-o-Stack sprk-o-Stack--split@s
    "
    data-id="promo-1"
  >
    <div
      class="
        sprk-c-Promo__content
        sprk-o-Stack__item
        sprk-o-Stack
        sprk-o-Stack--large
      "
    >
      <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-c-Promo__title">
        Title
      </h3>

      <div class="sprk-c-Promo__subtitle sprk-o-Stack__item">
        Subtitle
      </div>

      <div class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse
        id inventore integer eum non enim diam habitant. Maecenas nunc
        per lacus neque egestas. Diam quod curabitur.
      </div>

      <div class="sprk-o-Stack__item">
        <a href="#nogo" class="sprk-c-Button">
          Learn More
        </a>
      </div>
    </div>
  </div>
`;

defaultStory.story = {
  name: 'Default',
};

export const flag = () => `
  <div
    class="
      sprk-c-Promo
      sprk-c-Promo--flag
      sprk-c-Promo--bordered
      sprk-o-Stack
      sprk-o-Stack--split@s
    "
    data-id="promo-2"
  >
    <a href="#nogo" class="sprk-o-Stack__item sprk-o-Stack__item--fourth@s">
      <img
        class="sprk-c-Promo__image sprk-c-Promo__image--flag"
        alt="Spark Design System Logo."
        src="https://spark-assets.netlify.app/spark-logo-updated.svg"
      >
    </a>

    <div
      class="
        sprk-c-Promo__content
        sprk-o-Stack__item
        sprk-o-Stack__item--three-fourths@s
        sprk-o-Stack
        sprk-o-Stack--large
      "
    >
      <div class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse
        id inventore integer eum non enim diam habitant. Maecenas nunc
        per lacus neque egestas. Diam quod curabitur.
      </div>
    </div>
  </div>
`;

flag.story = {
  parameters: {
    docs: { iframeHeight: 300 },
  },
};

export const withImage = () => `
  <div
    class="
      sprk-c-Promo
      sprk-c-Promo--bordered
      sprk-o-Stack
      sprk-o-Stack--split@s
    "
    data-id="promo-3"
  >
    <a href="#nogo" class="sprk-o-Stack__item sprk-o-Stack__item--half@s ">
      <img
        class="sprk-c-Promo__image"
        src="https://spark-assets.netlify.app/house.jpg"
        alt="A house and front yard."
      />
    </a>

    <div class="
      sprk-c-Promo__content
      sprk-o-Stack__item
      sprk-o-Stack__item--half@s
      sprk-o-Stack
      sprk-o-Stack--large"
    >

      <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-c-Promo__title">
        Title
      </h3>

      <div class="sprk-c-Promo__subtitle sprk-o-Stack__item">
        Subtitle
      </div>

      <div class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse
        id inventore integer eum non enim diam habitant. Maecenas nunc
        per lacus neque egestas. Diam quod curabitur.
      </div>

      <div class="sprk-o-Stack__item">
        <a href="#nogo" class="sprk-c-Button">
          Learn More
        </a>
      </div>
    </div>
  </div>
  `;

export const withReversedImage = () => `
  <div
    class="
      sprk-c-Promo
      sprk-c-Promo--bordered
      sprk-o-Stack
      sprk-o-Stack--split@s
    "
    data-id="promo-4"
  >
    <div
      class="
        sprk-c-Promo__content
        sprk-o-Stack__item
        sprk-o-Stack__item--half@s
        sprk-o-Stack sprk-o-Stack--large
      "
    >
      <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-c-Promo__title">
        Title
      </h3>

      <div class="sprk-c-Promo__subtitle sprk-o-Stack__item">
        Subtitle
      </div>

      <div class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse
        id inventore integer eum non enim diam habitant. Maecenas nunc
        per lacus neque egestas. Diam quod curabitur.
      </div>

      <div class="sprk-o-Stack__item">
        <a href="#nogo" class="sprk-c-Button">
          Learn More
        </a>
      </div>
    </div>

    <a href="#nogo" class="sprk-o-Stack__item sprk-o-Stack__item--half@s">
      <img
        class="sprk-c-Promo__image"
        src="https://spark-assets.netlify.app/house.jpg"
        alt="A house and front yard."
      />
    </a>
  </div>
`;
