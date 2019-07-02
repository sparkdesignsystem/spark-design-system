import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  OnInit
} from '@angular/core';
import { SprkStepperStepComponent } from './sprk-stepper-step/sprk-stepper-step.component';

@Component({
  selector: 'sprk-stepper',
  template: `
    <ol [ngClass]="getClasses()">
      <sprk-stepper-slider></sprk-stepper-slider>
      <sprk-stepper-step-item
        *ngFor="
          let step of steps;
          let i = index;
          let isLast = last;
          let isFirst = first
        "
        (click)="onClick(i)"
        [index]="i"
        [last]="isLast"
        [first]="isFirst"
        [title]="step.title"
        [content]="step.content"
        [selected]="checkIfSelected(step.isSelected, i)"
        [selectedIndex]="selectedIndex"
        [hasDescription]="hasDescription"
      >
      </sprk-stepper-step-item>
    </ol>
  `
})
export class SprkStepperComponent implements OnInit {
  @Input() additionalClasses: string;
  @Input() hasDarkBg: boolean;
  @Input() hasDescription: boolean;

  selectedIndex = null;
  defaultSelected;
  @ContentChildren(SprkStepperStepComponent) steps: QueryList<
    SprkStepperStepComponent
  >;

  checkIfSelected(isSelected, i) {
    if (this.selectedIndex === i) {
      return true;
    }
  }

  onClick(index: number): void {
    this.selectedIndex = index;
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

  ngOnInit() {
    // this.steps.forEach(step => {
    //   if (step.isSelected) {
    //   }
    // });
  }
}
