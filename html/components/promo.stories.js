export default {
  title: 'Components|Promo',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
};

export const defaultStory = () => (`
  <div
    class="sprk-c-Promo  sprk-c-Promo--bordered sprk-o-Stack sprk-o-Stack--split@s"
    data-id="promo-1"
  >

    <div
      class="sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large"
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
        <a href="#" class="sprk-c-Button">
          Learn More
        </a>
      </div>
    </div>

  </div>
`);

export const flag = () => (`
  <div
    class="sprk-c-Promo sprk-c-Promo--flag  sprk-c-Promo--bordered sprk-o-Stack sprk-o-Stack--split@s"
    data-id="promo-2"
  >

    <a href="#" class="sprk-o-Stack__item sprk-o-Stack__item--fourth@s">
      <img
        class="sprk-c-Promo__image--flag"
        alt="Spark placeholder image."
        src="https://spark-assets.netlify.com/spark-placeholder.jpg"
      >
    </a>

    <div
      class="sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack__item--three-fourths@s sprk-o-Stack sprk-o-Stack--large"
    >
      <div class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse
        id inventore integer eum non enim diam habitant. Maecenas nunc
        per lacus neque egestas. Diam quod curabitur.
      </div>
    </div>

  </div>
`);

defaultStory.story = {
  name: 'Default',
};

export const withImage = () => (`
  <div
    class="sprk-c-Promo sprk-c-Promo--bordered sprk-o-Stack sprk-o-Stack--split@s"
    data-id="promo-3"
  >

    <a href="#" class="sprk-o-Stack__item sprk-o-Stack__item--half@s ">
      <img
        class="sprk-c-Promo__image"
        src="https://spark-assets.netlify.com/blue-house.jpg"
        alt="Spark placeholder image."
      />
    </a>

    <div class="sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack__item--half@s sprk-o-Stack sprk-o-Stack--large">

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
        <a href="#" class="sprk-c-Button">
          Learn More
        </a>
      </div>
    </div>

  </div>
  `);

export const withReversedImage = () => (`
  <div
    class="sprk-c-Promo sprk-c-Promo--bordered sprk-o-Stack sprk-o-Stack--split@s"
    data-id="promo-4"
  >

    <div class="sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack__item--half@s sprk-o-Stack sprk-o-Stack--large">

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
        <a href="#" class="sprk-c-Button">
          Learn More
        </a>
      </div>
    </div>

    <a href="#" class="sprk-o-Stack__item sprk-o-Stack__item--half@s">
      <img
        class="sprk-c-Promo__image"
        src="https://spark-assets.netlify.com/blue-house.jpg"
        alt="Spark placeholder image."
      />
    </a>
  </div>
`);


export const promoBar = () => (
  `
    <div class="sprk-c-Promo sprk-c-Promo--bar sprk-o-Stack sprk-o-Stack--center-row" data-id="promo-bar">
      <div class="sprk-c-Promo__content sprk-o-Stack__item">
        <p class="sprk-b-TypeBodyTwo sprk-c-Promo__text">
          Lorem ipsum dolor. Sit amet pede.
          Lorem ipsum dolor. Sit amet pede.
        </p>
      </div>
    </div>
  `
);
