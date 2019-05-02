import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import {
  handleTabKeydown,
  resetTabs,
  setActiveTab
} from '@sparkdesignsystem/spark';

@Component({
  selector: 'sprk-stepper',
  template: `
    <ol
      [ngClass]="getClasses()"
      data-sprk-stepper="container"
      [attr.data-id]="idString"
      role="tablist"
      aria-orientation="vertical"
    >
      <ng-content></ng-content>
    </ol>
  `
})
export class SparkStepperComponent implements AfterViewInit {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;
  @Input()
  hasDarkBg: boolean;

  constructor(public ref: ElementRef) {}

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Stepper'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    if (this.hasDarkBg) {
      classArray.push('sprk-c-Stepper--has-dark-bg');
    }

    return classArray.join(' ');
  }

  bindUIEvents(): void {
    const steps = this.ref.nativeElement.querySelectorAll(
      '[data-sprk-stepper="step"]'
    );
    const stepPanels = this.ref.nativeElement.querySelectorAll(
      '[role="tabpanel"]'
    );
    const activeClass = 'sprk-c-Stepper__step--selected';
    const container = this.ref.nativeElement.querySelector(
      '[data-sprk-stepper="container"]'
    );
    const hasSlideEffect = this.ref.nativeElement.querySelector(
      '[data-sprk-stepper="description"]'
    );
    let sliderEl;
    if (!steps[0]) {
      return;
    }
    steps[0].classList.add('sprk-c-Stepper__step--first');
    steps[steps.length - 1].classList.add('sprk-c-Stepper__step--last');

    // If the stepper has stepper descriptions then build slider
    if (hasSlideEffect) {
      sliderEl = document.createElement('li');
      sliderEl.classList.add('sprk-c-Stepper__slider');
      sliderEl.setAttribute('data-sprk-stepper', 'slider');
      container.prepend(sliderEl);
    }

    steps.forEach((step, index) => {
      const stepTrigger = step.querySelector('[role="tab"]');
      if (!stepTrigger) {
        return;
      }
      if (hasSlideEffect) {
        step.classList.add('sprk-c-Stepper__step--has-slider');
      }

      stepTrigger.addEventListener('click', event => {
        event.preventDefault();
        resetTabs(steps, stepPanels, activeClass, sliderEl);
        setActiveTab(step, stepPanels[index], activeClass, sliderEl);
      });
    });

    this.ref.nativeElement.addEventListener('keydown', e => {
      handleTabKeydown(e, steps, stepPanels, activeClass, sliderEl);
    });
  }

  ngAfterViewInit(): void {
    this.bindUIEvents();
  }
}
