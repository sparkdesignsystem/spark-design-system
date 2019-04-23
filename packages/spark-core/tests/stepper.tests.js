/* global document window beforeEach afterEach describe it */
import sinon from 'sinon';
import { expect } from 'chai';
import createElementFromString from './_createElementFromString';
import { stepper } from '../components/stepper';

describe('stepper init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    stepper();
    expect(document.querySelectorAll.getCall(0).args[0]).eql(
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
    expect(sliderEl).eql(undefined);
  });

  it('should select step when clicked', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      false,
    );
    step1.click();
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });

  it('should focus next step when right arrow pressed', () => {
    stepper(stepperContainer);
    const step3 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[2];
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).eql(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 39;
    step3.dispatchEvent(event);
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });

  it('should focus next step when down arrow pressed', () => {
    stepper(stepperContainer);
    const step3 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[2];
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).eql(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 40;
    step3.dispatchEvent(event);
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });

  it('should focus last step when end key pressed', () => {
    stepper(stepperContainer);
    const step3 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[2];
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).eql(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 35;
    step3.dispatchEvent(event);
    expect(step3.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });

  it('should focus next step when left arrow pressed', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 37;
    step1.dispatchEvent(event);
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });

  it('should focus next step when up arrow pressed', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 38;
    step1.dispatchEvent(event);
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });

  it('should focus first step when home key pressed', () => {
    stepper(stepperContainer);
    const step1 = stepperContainer.querySelectorAll('.sprk-c-Stepper__step')[0];
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      false,
    );
    const event = new window.Event('keydown');
    event.keyCode = 36;
    step1.dispatchEvent(event);
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });
});

describe('steps UI Events tests, (descriptions)', () => {
  let stepperContainer;

  beforeEach(() => {
    stepperContainer = createElementFromString(`
    <div class="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
      <ol
        class="sprk-c-Stepper sprk-c-Stepper--has-dark-bg"
        data-sprk-stepper="container"
        data-id="stepper-1"
        role="tablist"
        aria-orientation="vertical">
        <li
          role="tab"
          aria-selected="true"
          class="
            sprk-c-Stepper__step
            sprk-c-Stepper__step--selected
            sprk-c-Stepper__step--first"
          data-sprk-stepper="step">
          <div
            class="
              sprk-c-Stepper__step-content
              sprk-c-Stepper__step-content--has-description">
            <span
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              aria-controls="target-1"
              id="step-1"
              >
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
          role="tab"
          class="sprk-c-Stepper__step"
          data-sprk-stepper="step">
          <div
            class="
              sprk-c-Stepper__step-content
              sprk-c-Stepper__step-content--has-description">
            <span
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              aria-controls="target-2"
              id="step-2">
              <span class="sprk-c-Stepper__step-icon"></span>
              <h3
                class="sprk-c-Stepper__step-heading"
                data-sprk-stepper="heading">
                Step Two
              </h3>
            </span>

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
          role="tab"
          class="sprk-c-Stepper__step"
          data-sprk-stepper="step">
          <div
            class="
              sprk-c-Stepper__step-content
              sprk-c-Stepper__step-content--has-description">
            <span
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              aria-controls="target-3"
              id="step-3">
              <span class="sprk-c-Stepper__step-icon"></span>
              <h3
                class="sprk-c-Stepper__step-heading"
                data-sprk-stepper="heading">
                Step Three
              </h3>
            </span>

            <div
              class="sprk-c-Stepper__step-description sprk-u-HideWhenJs"
              data-sprk-stepper="description"
              aria-labelledby="step-3"
              ids="target-3"
              role="tabpanel">
              <p class="sprk-b-TypeBodyTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </li>

        <li
          role="tab"
          class="sprk-c-Stepper__step sprk-c-Stepper__step--last"
          data-sprk-stepper="step">
          <div
            class="
              sprk-c-Stepper__step-content
              sprk-c-Stepper__step-content--has-description">
            <span
              class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
              aria-controls="target-4"
              id="step-4"
              href="#">
              <span class="sprk-c-Stepper__step-icon"></span>
              <h3
                class="sprk-c-Stepper__step-heading"
                data-sprk-stepper="heading">
                Step Four
              </h3>
            </span>

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
`);
    document.body.appendChild(stepperContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // it('should create slider element when there are no descriptions', () => {
  //   stepper(stepperContainer);
  //   const sliderEl = stepperContainer.querySelectorAll(
  //     '.sprk-c-Stepper__slider',
  //   )[0];
  //   console.log(stepperContainer.outerHTML);
  //   expect(sliderEl).not.eql(undefined);
  // });
});
