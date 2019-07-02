import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'sprk-stepper-step',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class SprkStepperStepComponent {
  /** Title of given step */
  @Input() title: string;
  /** default selected */
  @Input() isSelected: boolean;

  @ViewChild(TemplateRef) content: TemplateRef<any>;
}
