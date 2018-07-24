import { OnInit, Component, Input, ContentChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkErrorDirective } from '../../../directives/inputs/sprk-error/sprk-error.directive';

@Component({
  selector: 'sprk-input-container',
  template: `
    <div [ngClass]="getClasses()">
      <ng-content select="[sprk-label]"></ng-content>
      <ng-content select="[sprk-input]"></ng-content>
      <ng-content select="[sprk-error]"></ng-content>
    </div>`,
  styles: ['']
})

export class SparkInputContainerComponent implements OnInit {
  @Input() control: FormControl;
  @Input() controlName: string;
  @Input() additionalClasses: string;
  @Input() labelText: string;
  @Input() errorMessage: string;
  @Input() model: Object;

  @ContentChild(SprkLabelDirective) label: SprkLabelDirective;
  @ContentChild(SprkInputDirective) input: SprkInputDirective;
  @ContentChild(SprkErrorDirective) error: SprkErrorDirective;

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
