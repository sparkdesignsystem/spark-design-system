import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  ViewChildren,
  ViewEncapsulation,
  QueryList,
  EventEmitter,
  Input,
  TemplateRef
} from '@angular/core';
import { CdkStepper, CdkStep } from '@angular/cdk/stepper';
import { takeUntil } from 'rxjs/operators';

import { SprkStepperStepComponent } from './sprk-stepper-step/sprk-stepper-step.component';

@Component({
  selector: 'sprk-stepper',
  exportAs: 'bsStepper',
  providers: [{ provide: CdkStepper, useExisting: SprkStepperComponent }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ol [ngClass]="getClasses()">
      <ng-container
        *ngFor="
          let step of _steps;
          let i = index;
          let isLast = last;
          let isFirst = first
        "
      >
        <sprk-stepper-step
          (click)="onClick(i)"
          (keydown)="_onKeydown($event)"
          [id]="_getStepLabelId(i)"
          [index]="i"
          [state]="_getIndicatorType(i)"
          [label]="step.stepLabel || step.label"
          [selected]="selectedIndex === i"
          [active]="step.completed || selectedIndex === i || !linear"
          [optional]="step.optional"
          [last]="isLast"
          [first]="isFirst"
        >
        </sprk-stepper-step>
      </ng-container>
    </ol>
  `
})
export class SprkStepperComponent extends CdkStepper {
  @Input() additionalClasses: string;
  @Input() hasDarkBg: boolean;

  /** The list of step headers of the steps in the stepper. */
  // @ViewChildren(MatStepHeader) _stepHeader: QueryList<MatStepHeader>;
  @ViewChildren(SprkStepperStepComponent) _stepHeader: QueryList<
    SprkStepperStepComponent
  >;

  /** Steps that the stepper holds. */
  // @ContentChildren(MatStep) _steps: QueryList<MatStep>;
  @ContentChildren(CdkStep) _steps: QueryList<CdkStep>;

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

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    // Mark the component for change detection whenever the content children query changes
    this._steps.changes
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => this._stateChanged());
    this._steps.changes
      .pipe(takeUntil(this._destroyed))
      .subscribe(() =>
        console.log('SprkStepperComponent -> ngAfterContentInit')
      );
    console.log(this._steps, 'steps steps0');
  }
}
