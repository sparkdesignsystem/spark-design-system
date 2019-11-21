import { useEffect } from '@storybook/client-api';
import { stepper } from './stepper';
import '../utilities/polyfills/classListSVG';
import '../utilities/polyfills/CustomEvent';
import '../utilities/polyfills/ObjectPrepend';

export default {
  title: 'Components/Stepper',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/stepper)
    `,
  },
};

export const defaultStory = () => {
  useEffect(() => {
    stepper();
  }, []);

  return `
  <ol
    class="sprk-c-Stepper"
    data-sprk-stepper="container"
    data-id="stepper-1"
    role="tablist"
    aria-orientation="vertical"
  >
    <li
    role="tab"
    class="sprk-c-Stepper__step"
    data-sprk-stepper="step"
    >
      <div class="sprk-c-Stepper__step-content">
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step One
          </h3>
        </span>
      </div>
    </li>

    <li
    role="tab"
    class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
    aria-selected="true"
    data-sprk-stepper="step"
    >
      <div class="sprk-c-Stepper__step-content">
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Two
          </h3>
        </span>
      </div>
    </li>

    <li
    role="tab"
    class="sprk-c-Stepper__step"
    data-sprk-stepper="step"
    >
      <div class="sprk-c-Stepper__step-content">
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Three
          </h3>
        </span>
      </div>
    </li>
  </ol>
  `;
};

defaultStory.story = {
  name: 'Default',
};

export const withStepDescriptions = () => {
  useEffect(() => {
    stepper();
  }, []);

  return `
  <ol
    class="sprk-c-Stepper"
    data-sprk-stepper="container"
    data-id="stepper-1"
    role="tablist"
    aria-orientation="vertical"
  >
    <li
      role="tab"
      class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
      data-sprk-stepper="step"
    >
      <div
        class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description"
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-target-1"
          id="one-step-1"
          aria-selected="true"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step One
          </h3>
        </span>

        <div
          class="sprk-c-Stepper__step-description"
          data-sprk-stepper="description"
          id="one-target-1"
          aria-labelledby="one-step-1"
          role="tabpanel"
        >
          <p class="sprk-b-TypeBodyTwo">
            Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </li>

    <li
      role="tab"
      class="sprk-c-Stepper__step"
      data-sprk-stepper="step"
    >
      <div
        class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description"
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-target-2"
          id="one-step-2"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Two
          </h3>
        </span>

        <div
          class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
          data-sprk-stepper="description"
          aria-labelledby="one-step-2"
          id="one-target-2"
          role="tabpanel"
        >
          <p class="sprk-b-TypeBodyTwo">
            Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </li>

    <li
      role="tab"
      class="sprk-c-Stepper__step"
      data-sprk-stepper="step"
    >
      <div
        class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description"
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-target-3"
          id="one-step-3"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Three
          </h3>
        </span>

        <div
          class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
          data-sprk-stepper="description"
          aria-labelledby="one-step-3"
          ids="one-target-3"
          role="tabpanel"
        >
          <p class="sprk-b-TypeBodyTwo">
            Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </li>

    <li
      role="tab"
      class="sprk-c-Stepper__step"
      data-sprk-stepper="step"
    >
      <div
        class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description"
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-target-4"
          id="one-step-4"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Four
          </h3>
        </span>

        <div
          class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
          data-sprk-stepper="description"
          aria-labelledby="one-step-4"
          id="one-target-4"
          role="tabpanel"
        >
          <p class="sprk-b-TypeBodyTwo">
            Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </li>
  </ol>
  `;
};

export const withDarkBackground = () => {
  useEffect(() => {
    stepper();
  }, []);

  return `
  <div class="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
    <ol
      class="sprk-c-Stepper sprk-c-Stepper--has-dark-bg "
      data-sprk-stepper="container"
      data-id="stepper-1"
      role="tablist"
      aria-orientation="vertical"
    >
      <li
        role="tab"
        aria-selected="true"
        class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
        data-sprk-stepper="step"
      >
        <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="target-1"
            id="step-1"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
              Step One
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description"
            data-sprk-stepper="description"
            id="target-1"
            aria-labelledby="step-1"
            role="tabpanel"
          >
            <p class="sprk-b-TypeBodyTwo">
              Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </li>

      <li
        role="tab"
        class="sprk-c-Stepper__step"
        data-sprk-stepper="step"
      >
        <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="target-2"
            id="step-2"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
              Step Two
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
            data-sprk-stepper="description"
            aria-labelledby="step-2"
            id="target-2"
            role="tabpanel"
          >
            <p class="sprk-b-TypeBodyTwo">
              Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </li>

      <li
        role="tab"
        class="sprk-c-Stepper__step"
        data-sprk-stepper="step"
      >
        <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="target-3"
            id="step-3"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
              Step Three
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
            data-sprk-stepper="description"
            aria-labelledby="step-3"
            id="target-3"
            role="tabpanel"
          >
            <p class="sprk-b-TypeBodyTwo">
              Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </li>

      <li
        role="tab"
        class="sprk-c-Stepper__step"
        data-sprk-stepper="step"
      >
        <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="target-4"
            id="step-4"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
              Step Four
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
            data-sprk-stepper="description"
            aria-labelledby="step-4"
            id="target-4"
            role="tabpanel"
          >
            <p class="sprk-b-TypeBodyTwo">
              Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </li>
    </ol>

  </div>
  `;
};

export const withCarousel = () => {
  useEffect(() => {
    stepper();

    // Trigger iframe window resize to address lory carousel issues
    const iframeWindow = window.frameElement.contentWindow;
    const event = document.createEvent('Event');
    event.initEvent('resize', true, true);
    iframeWindow.addEventListener('resize', () => {
      iframeWindow.resizeBy(0, 0);
    }, false);
    setTimeout(() => {
      iframeWindow.dispatchEvent(event);
    }, 500);
  }, []);

  return `
  <div class="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
    <div class="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--center-column sprk-o-Stack--split-reverse@xl">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@xl">
        <div
          class="sprk-c-Carousel"
          data-sprk-carousel="stepper-carousel-01"
        >
          <div class="sprk-c-Carousel__controls sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-row sprk-o-Stack--center-column">

            <button class="sprk-o-Stack__item sprk-c-Carousel__prev">
              <span class="sprk-u-ScreenReaderText">Previous Slide</span>
              <svg
                class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l"
                viewBox="0 0 100 100"
              >
                <use xlink:href="#chevron-left" />
              </svg>
            </button>

            <div class="sprk-c-Carousel__frame">
              <ul class="sprk-c-Carousel__slides">
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.com/phone-shadow.png" alt="Cell phone with a blank screen.">
                </li>
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.com/phone-shadow.png" alt="Cell phone with a blank screen.">
                </li>
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.com/phone-shadow.png" alt="Cell phone with a blank screen.">
                </li>
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.com/phone-shadow.png" alt="Cell phone with a blank screen.">
                </li>
              </ul>
              <div
                class="sprk-c-Carousel__dots"
                data-sprk-carousel-dots="stepper-carousel-01"
              ></div>
            </div>

            <button class="sprk-o-Stack__item sprk-c-Carousel__next">
              <span class="sprk-u-ScreenReaderText">Next Slide</span>
              <svg
                class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l"
                viewBox="0 0 100 100"
              >
                <use xlink:href="#chevron-right" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@xl">
        <ol
          class="sprk-c-Stepper sprk-c-Stepper--has-dark-bg sprk-c-Stepper--has-carousel"
          data-sprk-stepper="container"
          data-sprk-stepper-carousel="stepper-carousel-01"
          data-id="stepper-1"
          role="tablist"
          aria-orientation="vertical"
        >
          <li
            role="tab"
            aria-selected="true"
            class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
            data-sprk-stepper="step"
          >
            <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
              <span
                class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
                aria-controls="sc-target-1"
                id="sc-step-1"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
                  Step One
                </h3>
              </span>

              <div
                class="sprk-c-Stepper__step-description"
                data-sprk-stepper="description"
                id="sc-target-1"
                aria-labelledby="sc-step-1"
                role="tabpanel"
              >
                <p class="sprk-b-TypeBodyTwo">
                  Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </li>

          <li
            role="tab"
            class="sprk-c-Stepper__step"
            data-sprk-stepper="step"
          >
            <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
              <span
                class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
                aria-controls="sc-target-2"
                id="sc-step-2"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
                  Step Two
                </h3>
              </span>

              <div
                class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
                data-sprk-stepper="description"
                aria-labelledby="sc-step-2"
                id="sc-target-2"
                role="tabpanel"
              >
                <p class="sprk-b-TypeBodyTwo">
                  Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </li>

          <li
            role="tab"
            class="sprk-c-Stepper__step"
            data-sprk-stepper="step"
          >
            <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
              <span
                class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
                aria-controls="sc-target-3"
                id="sc-step-3"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
                  Step Three
                </h3>
              </span>

              <div
                class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
                data-sprk-stepper="description"
                aria-labelledby="sc-step-3"
                id="sc-target-3"
                role="tabpanel"
              >
                <p class="sprk-b-TypeBodyTwo">
                  Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </li>

          <li
            role="tab"
            class="sprk-c-Stepper__step"
            data-sprk-stepper="step"
          >
            <div class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description">
              <span
                class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
                aria-controls="sc-target-4"
                id="sc-step-4"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
                  Step Four
                </h3>
              </span>

              <div
                class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
                data-sprk-stepper="description"
                aria-labelledby="sc-step-4"
                id="sc-target-4"
                role="tabpanel"
              >
                <p class="sprk-b-TypeBodyTwo">
                  Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </li>
        </ol>

      </div>
    </div>
  </div>
  `;
};
