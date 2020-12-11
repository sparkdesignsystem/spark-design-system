import { useEffect } from '@storybook/client-api';
import { stepper } from './stepper';
import '../utilities/polyfills/classListSVG';
import '../utilities/polyfills/CustomEvent';
import '../utilities/polyfills/ObjectPrepend';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Stepper',
  decorators: [
    (story) => `<div class="sprk-o-Box sprk-u-JavaScript">${story()}</div>`,
  ],
  parameters: {
    docs: { iframeHeight: 300 },
    info: `
${markdownDocumentationLinkBuilder('stepper')}
For this component to function properly,
the HTML must be structured correctly:

- \`data-sprk-stepper=”container”\` on the \`<ol>\`.
- \`data-sprk-stepper=”step”\` on individual steps.
- \`data-sprk-stepper=”description”\` on the step
description containers.
- \`data-sprk-stepper=”heading”\` on the step
heading elements.
- \`aria-selected=true\` on the active step.
- \`aria-role=”tablist”\` on the \`<ol>\`.
- \`aria-role=”tab”\` on each step.
- \`aria-role=”tabpanel”\` on the description container.
- \`aria-labelledby\` with a value that ties the
descriptions to the related step heading on the
description container.

When using the Carousel variant:

- \`data-sprk-carousel=”ID”\` on the carousel
element with a unique value for ID.
- \`data-sprk-stepper-carousel=”id”\` on the
\`<ol>\` with the same value as \`data-spark-carousel\`.
- \`data-sprk-carousel-dots\` on the container
that will contain the clickable “dots” used to
navigate on small viewports.

Other considerations:

- The active step cannot be programmatically
updated in the HTML implementation of Stepper.
- Stepper makes use of the \`sprk-u-JavaScript\`
class to provide a graceful degradation experience
in environments where JavaScript is not enabled.
If \`sprk-u-JavaScript\` is not found on the \`<html>\`
element of the page, all the steps will be visible.
If \`sprk-u-JavaScript\` is present, only one step
will be visible at a time.
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
  parameters: {
    jest: ['stepper'],
  },
};

export const withStepDescriptions = () => {
  useEffect(() => {
    stepper();
  }, []);

  return `
  <ol
    class="sprk-c-Stepper"
    data-sprk-stepper="container"
    data-id="stepper-descriptions-1"
    role="tablist"
    aria-orientation="vertical"
  >
    <li
      role="tab"
      class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
      data-sprk-stepper="step"
    >
      <div
        class="
          sprk-c-Stepper__step-content 
          sprk-c-Stepper__step-content--has-description
        "
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-descriptions-target-1"
          id="step-descriptions-1"
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
          id="one-descriptions-target-1"
          aria-labelledby="step-descriptions-1"
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
        class="
          sprk-c-Stepper__step-content 
          sprk-c-Stepper__step-content--has-description
        "
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-descriptions-target-2"
          id="one-step-descriptions-2"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Two
          </h3>
        </span>

        <div
          class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
          data-sprk-stepper="description"
          aria-labelledby="one-step-descriptions-2"
          id="one-descriptions-target-2"
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
        class="
          sprk-c-Stepper__step-content 
          sprk-c-Stepper__step-content--has-description
        "
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-descriptions-target-3"
          id="one-step-descriptions-3"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Three
          </h3>
        </span>

        <div
          class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
          data-sprk-stepper="description"
          aria-labelledby="one-step-descriptions-3"
          id="one-descriptions-target-3"
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
        class="
          sprk-c-Stepper__step-content 
          sprk-c-Stepper__step-content--has-description
        "
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="one-descriptions-target-4"
          id="one-step-descriptions-4"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step Four
          </h3>
        </span>

        <div
          class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
          data-sprk-stepper="description"
          aria-labelledby="one-step-descriptions-4"
          id="one-descriptions-target-4"
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

withStepDescriptions.story = {
  parameters: {
    docs: { iframeHeight: 600 },
    jest: ['stepper'],
  },
};

export const withDarkBackground = () => {
  useEffect(() => {
    stepper();
  }, []);

  return `
  <div class="sprk-u-BackgroundColor--purple-dark sprk-o-Box sprk-o-Box--large">
    <ol
      class="sprk-c-Stepper sprk-c-Stepper--has-dark-bg "
      data-sprk-stepper="container"
      data-id="stepper-dark-1"
      role="tablist"
      aria-orientation="vertical"
    >
      <li
        role="tab"
        aria-selected="true"
        class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
        data-sprk-stepper="step"
      >
        <div 
          class="
            sprk-c-Stepper__step-content 
            sprk-c-Stepper__step-content--has-description
          "
        >
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="background-target-1"
            id="step-background-1"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 
              class="sprk-c-Stepper__step-heading" 
              data-sprk-stepper="heading"
            >
              Step One
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description"
            data-sprk-stepper="description"
            id="background-target-1"
            aria-labelledby="step-background-1"
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
          class="
            sprk-c-Stepper__step-content 
            sprk-c-Stepper__step-content--has-description
          "
        >
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="background-target-2"
            id="step-background-2"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 
              class="sprk-c-Stepper__step-heading" 
              data-sprk-stepper="heading"
            >
              Step Two
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
            data-sprk-stepper="description"
            aria-labelledby="step-background-2"
            id="background-target-2"
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
          class="
            sprk-c-Stepper__step-content 
            sprk-c-Stepper__step-content--has-description
          "
        >
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="background-target-3"
            id="step-background-3"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 
              class="sprk-c-Stepper__step-heading" 
              data-sprk-stepper="heading"
            >
              Step Three
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
            data-sprk-stepper="description"
            aria-labelledby="step-background-3"
            id="background-target-3"
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
          class="
            sprk-c-Stepper__step-content 
            sprk-c-Stepper__step-content--has-description
          "
        >
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            aria-controls="background-target-4"
            id="step-background-4"
          >
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 
              class="sprk-c-Stepper__step-heading" 
              data-sprk-stepper="heading"
            >
              Step Four
            </h3>
          </span>

          <div
            class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
            data-sprk-stepper="description"
            aria-labelledby="step-background-4"
            id="background-target-4"
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

withDarkBackground.story = {
  parameters: {
    docs: { iframeHeight: 600 },
    jest: ['stepper'],
  },
};

export const withCarousel = () => {
  useEffect(() => {
    stepper();

    // Trigger iframe window resize to address lory carousel issues
    const iframe = window.frameElement;
    let iframeWindow;
    // If the preview is not inside an iFrame, target the whole window.
    if (iframe) {
      iframeWindow = iframe.contentWindow;
    } else {
      iframeWindow = window;
    }
    if (iframeWindow) {
      const event = document.createEvent('Event');
      event.initEvent('resize', true, true);
      iframeWindow.addEventListener(
        'resize',
        () => {
          iframeWindow.resizeBy(0, 0);
        },
        false,
      );
      setTimeout(() => {
        iframeWindow.dispatchEvent(event);
      }, 500);
    }
  }, []);

  return `
  <div class="sprk-u-BackgroundColor--purple-dark sprk-o-Box sprk-o-Box--large">
    <div 
      class="
        sprk-o-CenteredColumn 
        sprk-o-Stack sprk-o-Stack--medium 
        sprk-o-Stack--center-column 
        sprk-o-Stack--split-reverse@xl
      "
    >
      <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@xl">
        <div
          class="sprk-c-Carousel sprk-c-Carousel--has-dark-bg"
          data-sprk-carousel="stepper-carousel-01"
        >
          <div 
            class="
              sprk-c-Carousel__controls 
              sprk-o-Stack 
              sprk-o-Stack--split@xxs 
              sprk-o-Stack--center-row 
              sprk-o-Stack--center-column
            "
          >
            <button class="sprk-o-Stack__item sprk-c-Carousel__prev">
              <span class="sprk-u-ScreenReaderText">Previous Slide</span>
              <svg
                class="
                  sprk-c-Icon 
                  sprk-c-Icon--filled-current-color 
                  sprk-c-Icon--xl
                "
                viewBox="0 0 100 100"
              >
                <use xlink:href="#chevron-left" />
              </svg>
            </button>

            <div class="sprk-c-Carousel__frame">
              <ul class="sprk-c-Carousel__slides">
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.app/phone-shadow.png" alt="Cell phone with a blank screen.">
                </li>
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.app/phone-shadow.png" alt="Cell phone with a blank screen.">
                </li>
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.app/phone-shadow.png" alt="Cell phone with a blank screen.">
                </li>
                <li class="sprk-c-Carousel__frame-item">
                  <img src="https://spark-assets.netlify.app/phone-shadow.png" alt="Cell phone with a blank screen.">
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
                class="
                  sprk-c-Icon 
                  sprk-c-Icon--filled-current-color 
                  sprk-c-Icon--xl
                "
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
          class="
            sprk-c-Stepper 
            sprk-c-Stepper--has-dark-bg 
            sprk-c-Stepper--has-carousel
          "
          data-sprk-stepper="container"
          data-sprk-stepper-carousel="stepper-carousel-01"
          data-id="stepper-carousel-1"
          role="tablist"
          aria-orientation="vertical"
        >
          <li
            role="tab"
            aria-selected="true"
            class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
            data-sprk-stepper="step"
          >
            <div 
              class="
                sprk-c-Stepper__step-content 
                sprk-c-Stepper__step-content--has-description
              "
            >
              <span
                class="
                  sprk-c-Stepper__step-header 
                  sprk-b-Link 
                  sprk-b-Link--plain
                "
                aria-controls="sc-target-1"
                id="sc-step-1"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 
                  class="sprk-c-Stepper__step-heading" 
                  data-sprk-stepper="heading"
                >
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
                  Step 1 Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit.
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
              class="
                sprk-c-Stepper__step-content 
                sprk-c-Stepper__step-content--has-description
              "
            >
              <span
                class="
                  sprk-c-Stepper__step-header 
                  sprk-b-Link 
                  sprk-b-Link--plain
                "
                aria-controls="sc-target-2"
                id="sc-step-2"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 
                  class="sprk-c-Stepper__step-heading" 
                  data-sprk-stepper="heading"
                >
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
                  Step 2 Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit.
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
              class="
                sprk-c-Stepper__step-content 
                sprk-c-Stepper__step-content--has-description
              "
            >
              <span
                class="
                  sprk-c-Stepper__step-header 
                  sprk-b-Link 
                  sprk-b-Link--plain
                "
                aria-controls="sc-target-3"
                id="sc-step-3"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 
                  class="sprk-c-Stepper__step-heading" 
                  data-sprk-stepper="heading"
                >
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
                  Step 3 Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit.
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
              class="
                sprk-c-Stepper__step-content 
                sprk-c-Stepper__step-content--has-description
              "
            >
              <span
                class="
                  sprk-c-Stepper__step-header 
                  sprk-b-Link sprk-b-Link--plain
                "
                aria-controls="sc-target-4"
                id="sc-step-4"
              >
                <span class="sprk-c-Stepper__step-icon"></span>
                <h3 
                  class="sprk-c-Stepper__step-heading" 
                  data-sprk-stepper="heading"
                >
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
                  Step 4 Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit.
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

withCarousel.story = {
  parameters: {
    docs: { iframeHeight: 800 },
    jest: ['carousel', 'stepper'],
  },
};
