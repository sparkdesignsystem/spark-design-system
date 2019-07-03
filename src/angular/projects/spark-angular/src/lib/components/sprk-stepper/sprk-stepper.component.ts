import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { SprkStepperStepComponent } from './sprk-stepper-step/sprk-stepper-step.component';

@Component({
  selector: 'sprk-stepper',
  template: `
    <ol [ngClass]="getClasses()" [attr.data-id]="idString">
      <sprk-stepper-slider></sprk-stepper-slider>
      <sprk-stepper-step-item
        *ngFor="
          let step of steps;
          let i = index;
          let isLast = last;
          let isFirst = first
        "
        [idString]="step.idString"
        [analyticsString]="step.analyticsString"
        [index]="i"
        [last]="isLast"
        [first]="isFirst"
        (click)="onClick(i)"
        [title]="step.title"
        [hasDescription]="hasDescription"
        [additionalClasses]="step.additionalClasses"
        [content]="step.content"
        [selected]="this.selectedIndex === i"
        [selectedIndex]="selectedIndex"
      >
      </sprk-stepper-step-item>
    </ol>
  `
})
export class SprkStepperComponent implements AfterContentInit {
  @Input() additionalClasses: string;
  @Input() idString: string;
  @Input() hasDarkBg: boolean;
  @Input() hasDescription: boolean;

  @ContentChildren(SprkStepperStepComponent) steps: QueryList<
    SprkStepperStepComponent
  >;

  // variable to be affected by afterContentInit (for default active step), and onClick that sets recently pressed step
  selectedIndex = null;

  onClick(i) {
    // set the step that was just clicked equal to its index
    this.selectedIndex = i;
  }

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

  ngAfterContentInit() {
    // On init, go through all steps find the default active
    // Only needs to happen one time because after later click, it's irrelevant
    this.steps.forEach((step, i) => {
      console.log(step.content);
      if (step.isSelected) {
        this.selectedIndex = i;
      }
    });
  }
}
