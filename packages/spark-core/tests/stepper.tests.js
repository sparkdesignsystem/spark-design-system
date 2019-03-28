/* global document describe it beforeEach */
import { expect } from 'chai';
import {
  deselectSteps,
  selectStep,
  getSelectedStepIndex,
  nextStep,
  previousStep,
} from '../components/stepper';

describe('stepper init', () => {
  let container;
  let step;
  let stepContent;
  let stepTrigger;
  let step2;
  let stepContent2;
  let stepTrigger2;

  beforeEach(() => {
    container = document.createElement('ol');
    step = document.createElement('li');
    stepContent = document.createElement('div');
    stepTrigger = document.createElement('a');

    step2 = document.createElement('li');
    stepContent2 = document.createElement('div');
    stepTrigger2 = document.createElement('a');

    container.setAttribute('data-sprk-stepper', 'container');

    step.setAttribute('data-sprk-stepper', 'step');
    step.classList.add('sprk-c-Stepper__step--selected');
    stepTrigger.setAttribute('data-sprk-stepper', 'trigger');

    step2.setAttribute('data-sprk-stepper', 'step');
    step2.classList.add('sprk-c-Stepper__step');
    stepTrigger2.setAttribute('data-sprk-stepper', 'trigger');

    stepContent2.append(stepTrigger2);
    step2.append(stepContent2);
    stepContent.append(stepTrigger);
    step.append(stepContent);
    container.append(step2);
    container.append(step);
  });

  it('should deselect the steps in the stepper', () => {
    const steps = container.querySelectorAll('[data-sprk-stepper="step"]');
    deselectSteps(steps);
    expect(step.classList.contains('sprk-c-Stepper__step--selected')).eql(false);
  });

  it('should select the given step', () => {
    const steps = container.querySelectorAll('[data-sprk-stepper="step"]');
    selectStep(steps[0]);
    expect(steps[0].classList.contains('sprk-c-Stepper__step--selected')).eql(true);
  });

  it('should select the next step', () => {
    const steps = container.querySelectorAll('[data-sprk-stepper="step"]');
    deselectSteps(steps);
    selectStep(steps[0]);
    nextStep(steps);
    expect(steps[1].classList.contains('sprk-c-Stepper__step--selected')).eql(true);
  });

  it('should select the previous step', () => {
    const steps = container.querySelectorAll('[data-sprk-stepper="step"]');
    deselectSteps(steps);
    selectStep(steps[1]);
    previousStep(steps);
    expect(steps[0].classList.contains('sprk-c-Stepper__step--selected')).eql(true);
    expect(steps[1].classList.contains('sprk-c-Stepper__step--selected')).eql(false);
  });

  it('should return the index of the currently selected step', () => {
    const steps = container.querySelectorAll('[data-sprk-stepper="step"]');
    deselectSteps(steps);
    selectStep(steps[1]);
    getSelectedStepIndex(steps);
    expect(getSelectedStepIndex(steps)).eql(1);
  });
});
