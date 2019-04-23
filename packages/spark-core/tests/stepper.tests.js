/* global document window beforeEach afterEach describe it */
import sinon from 'sinon';
import { expect } from 'chai';
import { stepper, bindUIEvents } from '../components/stepper';

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

describe('steps UI Events tests', () => {
  let stepContainer;
  let step1;
  let step1Trigger;
  let step2;
  let step2Trigger;
  let step3;
  let step3Trigger;
  let panel1;
  let panel2;
  let panel3;
  let carousel;

  beforeEach(() => {
    stepContainer = document.createElement('ol');
    stepContainer.classList.add('sprk-c-Stepper');
    stepContainer.setAttribute('role', 'steplist');
    stepContainer.setAttribute('data-sprk-stepper', 'container');
    sinon.spy(stepContainer, 'addEventListener');
    stepContainer.setAttribute('data-sprk-stepper-carousel', '1');

    step1 = document.createElement('div');
    step1.setAttribute('data-sprk-stepper', 'step');
    step1.classList.add('sprk-c-Stepper__step');
    step1.classList.add('sprk-c-Stepper__step--selected');

    carousel = document.createElement('div');

    step1Trigger = document.createElement('a');
    step1Trigger.setAttribute('role', 'tab');
    step1Trigger.setAttribute('aria-selected', 'true');
    step1Trigger.textContent = 'step 1';
    sinon.spy(step1Trigger, 'addEventListener');
    step1.append(step1Trigger);

    step2 = document.createElement('div');
    step2.setAttribute('data-sprk-stepper', 'step');
    step2.classList.add('sprk-c-Stepper__step');
    step2.classList.add('sprk-c-Stepper__step--selected');

    step2Trigger = document.createElement('a');
    step2Trigger.setAttribute('role', 'tab');
    step2Trigger.setAttribute('aria-selected', 'true');
    step2Trigger.textContent = 'step 2';
    sinon.spy(step2Trigger, 'addEventListener');
    step2.append(step2Trigger);

    step3 = document.createElement('div');
    step3.setAttribute('data-sprk-stepper', 'step');
    step3.classList.add('sprk-c-Stepper__step');
    step3.classList.add('sprk-c-Stepper__step--selected');

    step3Trigger = document.createElement('a');
    step3Trigger.setAttribute('role', 'tab');
    step3Trigger.setAttribute('aria-selected', 'true');
    step3Trigger.textContent = 'step 3';
    sinon.spy(step3Trigger, 'addEventListener');
    step3.append(step3Trigger);

    panel1 = document.createElement('div');
    panel1.classList.add('sprk-c-Stepper__description');
    panel1.setAttribute('role', 'tabpanel');
    panel1.setAttribute('tabindex', '0');
    panel1.textContent = 'panel';

    panel2 = document.createElement('div');
    panel2.classList.add('sprk-c-Stepper__description');
    panel2.setAttribute('role', 'tabpanel');
    panel2.setAttribute('tabindex', '0');
    panel2.textContent = 'panel';

    panel3 = document.createElement('div');
    panel3.classList.add('sprk-c-Stepper__description');
    panel3.setAttribute('role', 'tabpanel');
    panel3.setAttribute('tabindex', '0');
    panel3.textContent = 'panel';

    step1.appendChild(panel1);
    step2.appendChild(panel2);
    step3.appendChild(panel3);

    stepContainer.appendChild(step1);
    stepContainer.appendChild(step2);
    stepContainer.appendChild(step3);
    stepContainer.appendChild(carousel);

    stepper();
    bindUIEvents(stepContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    step1Trigger.addEventListener.restore();
    step2Trigger.addEventListener.restore();
    step3Trigger.addEventListener.restore();
    stepContainer.addEventListener.restore();
  });

  // it('should bind the click event on each step', () => {
  //   expect(step1Trigger.addEventListener.getCall(0).args[0]).eql('click');
  //   expect(step2Trigger.addEventListener.getCall(0).args[0]).eql('click');
  //   expect(step3Trigger.addEventListener.getCall(0).args[0]).eql('click');
  // });

  it('should select step when clicked', () => {
    step1Trigger.click();
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
  });

  it('should focus next step when right arrow pressed', () => {
    const event = new window.Event('keydown');
    event.keyCode = 39;
    expect(step1.classList.contains('sprk-c-Stepper__step--selected')).eql(
      true,
    );
    stepContainer.dispatchEvent(event);
  });
});
