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
      <ng-container
        *ngFor="
          let step of steps;
          let i = index;
          let isLast = last;
          let isFirst = first
        "
      >
        <sprk-stepper-slider
          [offsetTop]="offsetTop"
          [content]="step.content"
          [title]="step.title"
          [selected]="selectedIndex === i"
          [hasDescription]="hasDescription"
        ></sprk-stepper-slider>
        <sprk-stepper-step-item
          [idString]="step.idString"
          [analyticsString]="step.analyticsString"
          [index]="i"
          [last]="isLast"
          [first]="isFirst"
          (click)="onClick(i)"
          (getOffset)="getOffset($event)"
          [title]="step.title"
          [hasDescription]="hasDescription"
          [additionalClasses]="step.additionalClasses"
          [content]="step.content"
          [selected]="selectedIndex === i"
          [selectedIndex]="selectedIndex"
        >
        </sprk-stepper-step-item>
      </ng-container>
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
  /** Emitted from stepper step */
  offsetTop;
  getOffset(e) {
    this.offsetTop = e;
  }

  setData() {
    this.steps.forEach((step, i) => {
      if (step.isSelected) {
        this.selectedIndex = i;
      }
    });
  }

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
    this.setData();
  }
}
