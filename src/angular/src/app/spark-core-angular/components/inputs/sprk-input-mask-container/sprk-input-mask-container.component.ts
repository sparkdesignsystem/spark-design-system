import { OnInit, OnChanges, Component, Input, ContentChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';

@Component({
  selector: 'sprk-input-mask-container',
  template: `
    <div [ngClass]="getClasses()">
      <ng-content select="[sprk-label]"></ng-content>
      <ng-content select="[sprk-input]"></ng-content>
      <ng-content select="sprk-selection-item-container"></ng-content>
      <ng-content select="[sprk-helper-text]"></ng-content>
      <ng-content select="[sprk-field-error]"></ng-content>
    </div>`,
  styles: ['']
})

export class SparkInputMaskContainerComponent implements OnInit {
  @Input() control: FormControl;
  @Input() controlName: string;
  @Input() additionalClasses: string;
  @Input() labelText: string;
  @Input() errorMessage: string;
  @Input() model: Object;

  @ContentChild(SprkLabelDirective) label: SprkLabelDirective;
  @ContentChild(SprkInputDirective) input: SprkInputDirective;
  @ContentChild(SprkFieldErrorDirective) error: SprkFieldErrorDirective;
  @ContentChild(SprkSelectionInputDirective) toggleCheck: SprkSelectionInputDirective;

  id = _.uniqueId();
  input_id= `input_${this.id}`;
  error_id = `error_${this.id}`;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-b-InputContainer'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngOnInit() : void {
    if(this.label && this.input) {
      this.label.ref.nativeElement.setAttribute('for', this.input_id);
      this.input.ref.nativeElement.id = this.input_id;
    }
    if(this.input && this.error) {
      this.input.ref.nativeElement.setAttribute('aria-descibedby', this.input_id);
      this.error.ref.nativeElement.id = this.error_id;
    }
  }
}
