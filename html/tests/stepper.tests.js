/* global document window beforeEach afterEach describe it sinon */
import createElementFromString from './_createElementFromString';

const mockCarouselStub = sinon.stub(() => ({
  slideTo: () => {},
}));

jest.mock('../components/carousel', () => ({
  carousel: mockCarouselStub,
}));

const {
  stepper,
  positionSlider,
  resetSlider,
} = require('../components/stepper');

describe('stepper init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    stepper();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-stepper="container"]',
    );
  });
});

describe('steps UI Events tests, (no descriptions)', () => {
  let stepperContainer;

  beforeEach(() => {
    stepperContainer = createElementFromString(`
    <ol
      class="sprk-c-Stepper"
      data-sprk-stepper="container"
      data-id="stepper-1"
      role="tablist"
      aria-orientation="vertical">
      <li
        role="tab"
        class="sprk-c-Stepper__step sprk-c-Stepper__step--first"
        data-sprk-stepper="step">
        <div class="sprk-c-Stepper__step-content">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            href="#">
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3
              class="sprk-c-Stepper__step-heading"
              data-sprk-stepper="heading">
              Step One
            </h3>
          </span>
        </div>
      </li>
      <li
        role="tab"
        class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
        aria-selected="true"
        data-sprk-stepper="step">
        <div class="sprk-c-Stepper__step-content">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            href="#">
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3
              class="sprk-c-Stepper__step-heading"
              data-sprk-stepper="heading">
              Step Two
            </h3>
          </span>
        </div>
      </li>
      <li
        role="tab"
        class="sprk-c-Stepper__step sprk-c-Stepper__step--last"
        data-sprk-stepper="step">
        <div class="sprk-c-Stepper__step-content">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            href="#">
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3 class="sprk-c-Stepper__step-heading"
              data-sprk-stepper="heading">
              Step Three
            </h3>
          </span>
        </div>
      </li>
    </ol>
    `);
    document.body.appendChild(stepperContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should not create slider element when there are no descriptions', () => {
    stepper(stepperContainer);
    const sliderEl = stepperContainer.querySelectorAll(
      '.sprk-c-Stepper__slider',
    )[0];
    expect(sliderEl).toEqual(undefined);
  });

  it('should select step when clicked', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    step1.click();
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should focus next step when right arrow pressed', () => {
    stepper(stepperContainer);
    const step3 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[2];
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 39;
    step3.dispatchEvent(event);
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should focus next step when down arrow pressed', () => {
    stepper(stepperContainer);
    const step3 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[2];
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 40;
    step3.dispatchEvent(event);
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should focus last step when end key pressed', () => {
    stepper(stepperContainer);
    const step3 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[2];
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 35;
    step3.dispatchEvent(event);
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should focus next step when left arrow pressed', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 37;
    step1.dispatchEvent(event);
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should focus next step when up arrow pressed', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 38;
    step1.dispatchEvent(event);
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should focus first step when home key pressed', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 36;
    step1.dispatchEvent(event);
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should do nothing when other key pressed', () => {
    stepper(stepperContainer);
    const step2 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[1];
    expect(step2.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
    const event = new window.Event('keydown');
    event.keyCode = 8;
    step2.dispatchEvent(event);
    expect(step2.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });
});

describe('steps UI Events tests, (descriptions)', () => {
  let stepperContainer;

  beforeEach(() => {
    stepperContainer = createElementFromString(`
<div class="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
  <div class="
    sprk-o-CenteredColumn
    sprk-o-Stack
    sprk-o-Stack--large
    sprk-o-Stack--center-column
    sprk-o-Stack--split-reverse@xl">
    <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@m">
      <div class="sprk-c-Carousel" data-sprk-carousel="stepper-carousel-01">
        <div class="
          sprk-c-Carousel__controls
          sprk-o-Stack
          sprk-o-Stack--split@xxs
          sprk-o-Stack--center-row
          sprk-o-Stack--center-column">
          <button class="sprk-c-Carousel__prev sprk-o-Stack__item">
            <span class="sprk-u-ScreenReaderText">Previous Slide</span>
            <svg class="
              sprk-c-Icon
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--xl"
              viewBox="0 0 100 100">
              <use xlink:href="#chevron-left-circle" />
            </svg>
          </button>
          <div class="sprk-c-Carousel__frame">
            <ul class="sprk-c-Carousel__slides">
              <li class="sprk-c-Carousel__frame-item"></li>
              <li class="sprk-c-Carousel__frame-item"></li>
              <li class="sprk-c-Carousel__frame-item"></li>
              <li class="sprk-c-Carousel__frame-item"></li>
            </ul>
            <div
              class="sprk-c-Carousel__dots"
              data-sprk-carousel-dots="stepper-carousel-01"></div>
          </div>
          <button class="sprk-c-Carousel__next sprk-o-Stack__item">
            <span class="sprk-u-ScreenReaderText">Next Slide</span>
            <svg
              class="
                sprk-c-Icon
                sprk-c-Icon--filled-current-color
                sprk-c-Icon--xl"
                viewBox="0 0 100 100">
              <use xlink:href="#chevron-right-circle" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@m">
      <ol
        class="
          sprk-c-Stepper
          sprk-c-Stepper--has-dark-bg
          sprk-c-Stepper--has-carousel"
        data-sprk-stepper="container"
        data-sprk-stepper-carousel="stepper-carousel-01"
        data-id="stepper-1"
        role="tablist"
        aria-selected="true"
        aria-orientation="vertical">
        <li
          role="tab"
          class="
            sprk-c-Stepper__step
            sprk-c-Stepper__step--selected
            sprk-c-Stepper__step--first"
          data-sprk-stepper="step">
          <div class="
            sprk-c-Stepper__step-content
            sprk-c-Stepper__step-content--has-description">
            <span
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              aria-controls="target-1"
              id="step-1">
              <span class="sprk-c-Stepper__step-icon"></span>
              <h3
                class="sprk-c-Stepper__step-heading"
                data-sprk-stepper="heading">
                Step One
              </h3>
            </span>
            <div
              class="sprk-c-Stepper__step-description"
              data-sprk-stepper="description"
              id="target-1"
              aria-labelledby="step-1"
              role="tabpanel">
              <p class="sprk-b-TypeBodyTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </li>
        <li
          class="sprk-c-Stepper__step"
          data-sprk-stepper="step">
          <div class="
            sprk-c-Stepper__step-content
            sprk-c-Stepper__step-content--has-description">
            <a
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              role="tab"
              aria-controls="target-2"
              id="step-2"
              href="#">
              <span class="sprk-c-Stepper__step-icon"></span>
              <h3
                class="sprk-c-Stepper__step-heading"
                data-sprk-stepper="heading"
              >
                Step Two
              </h3>
            </a>
            <div
              class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
              data-sprk-stepper="description"
              aria-labelledby="step-2"
              id="target-2"
              role="tabpanel">
              <p class="sprk-b-TypeBodyTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </li>
        <li
          class="sprk-c-Stepper__step"
          data-sprk-stepper="step">
          <div class="
            sprk-c-Stepper__step-content
            sprk-c-Stepper__step-content--has-description">
            <a
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              role="tab"
              aria-controls="target-3"
              id="step-3"
              href="#">
              <span class="sprk-c-Stepper__step-icon"></span>
              <h3 class="sprk-c-Stepper__step-heading"
                  data-sprk-stepper="heading"
              >
                Step Three
              </h3>
            </a>
            <div
              class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
              data-sprk-stepper="description"
              aria-labelledby="step-3"
              id="target-3"
              role="tabpanel">
              <p class="sprk-b-TypeBodyTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </li>
        <li
          class="sprk-c-Stepper__step sprk-c-Stepper__step--last"
          data-sprk-stepper="step">
          <div class="
            sprk-c-Stepper__step-content
            sprk-c-Stepper__step-content--has-description">
            <a
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              role="tab"
              aria-controls="target-4"
              id="step-4"
              href="#">
              <span class="sprk-c-Stepper__step-icon"></span>
              <h3
                class="sprk-c-Stepper__step-heading"
                data-sprk-stepper="heading"
              >
                Step Four
              </h3>
            </a>
            <div
              class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
              data-sprk-stepper="description"
              aria-labelledby="step-4"
              id="target-4"
              role="tabpanel">
              <p class="sprk-b-TypeBodyTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>
 </div>
</div>
`);
    document.body.appendChild(stepperContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create slider element when there are no descriptions', () => {
    stepper(stepperContainer);
    const sliderEl = stepperContainer.querySelectorAll(
      '.sprk-c-Stepper__slider',
    )[0];
    expect(sliderEl).not.toEqual(undefined);
  });

  it(
    'do not reset the top of the slider if the resize event is fired and' +
      'not moving from narrow to wide',
    () => {
      stepper(stepperContainer);
      const sliderEl = stepperContainer.querySelectorAll(
        '.sprk-c-Stepper__slider',
      )[0];
      const event = new window.Event('resize');
      sliderEl.style.top = '25px';
      window.dispatchEvent(event);
      expect(sliderEl.style.top).toBe('25px');
    },
  );

  it(
    'reset the top of the slider if the resize event is fired and' +
      'moving from narrow to wide',
    () => {
      stepper(stepperContainer);
      const sliderEl = stepperContainer.querySelectorAll(
        '.sprk-c-Stepper__slider',
      )[0];
      sliderEl.style.top = '25px';
      window.resizeTo(2000, 1000);
      expect(sliderEl.style.top).toBe('0px');
    },
  );

  it('should not change active slide if index matches current', () => {
    stepper(stepperContainer);
    const carouselContainer = stepperContainer.querySelectorAll(
      '[data-sprk-carousel]',
    )[0];
    const event = new window.Event('sprk.carousel.slide');
    event.detail = { index: 0 };
    carouselContainer.dispatchEvent(event);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should set active slide to index from sprk.carousel.slide', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    const step3 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[2];
    step1.click();
    const carouselContainer = stepperContainer.querySelectorAll(
      '[data-sprk-carousel]',
    )[0];
    const event = new window.Event('sprk.carousel.slide');
    event.detail = { index: 2 };
    carouselContainer.dispatchEvent(event);
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });

  it('should focus next step when right arrow pressed', () => {
    stepper(stepperContainer);
    const step2 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[1];
    expect(step2.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 39;
    step2.dispatchEvent(event);
    expect(step2.classList.contains('sprk-c-Stepper__step--selected')).toBe(
      true,
    );
  });
});

describe('slider position tests', () => {
  it('should not error if step description is undefined', () => {
    const slider = document.createElement('div');
    const step = createElementFromString(`
      <li
        role="tab"
        class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
        aria-selected="true"
        data-sprk-stepper="step">
        <div class="sprk-c-Stepper__step-content">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            href="#">
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3
              class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
              Step Two
            </h3>
          </span>
        </div>
      </li>
    `);
    resetSlider([step], slider, 'test');
    expect(step.querySelectorAll('.sprk-u-Visibility--hidden').length).toBe(0);
  });

  it('should not error if content (description) is not present', () => {
    const slider = document.createElement('div');
    const step = createElementFromString(`
      <li
        role="tab"
        class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
        aria-selected="true"
        data-sprk-stepper="step">
        <div class="sprk-c-Stepper__step-content">
          <span
            class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
            href="#">
            <span class="sprk-c-Stepper__step-icon"></span>
            <h3
              class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
              Step Two
            </h3>
          </span>
        </div>
      </li>
    `);
    positionSlider(step, undefined, slider);
    expect(step.getAttribute('aria-selected')).toBe('true');
  });
});
