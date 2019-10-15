import { Component, ContentChild, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';

@Component({
  selector: 'sprk-selection-item-container',
  template: `
    <div [ngClass]="getClasses()">
      <ng-content select="[sprkSelectionInput]"></ng-content>
      <ng-content select="[sprkSelectionLabel]"></ng-content>
      <ng-content></ng-content>
    </div>
  `
})
export class SprkSelectionItemContainerComponent implements OnInit {
  @Input()
  additionalClasses: string;

  @ContentChild(SprkSelectionLabelDirective, { static: true })
  label: SprkSelectionLabelDirective;
  @ContentChild(SprkSelectionInputDirective, { static: true })
  input: SprkSelectionInputDirective;

  id = _.uniqueId();
  input_id = `input_${this.id}`;

  getClasses(): string {
    const classArray: string[] = ['sprk-b-SelectionContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngOnInit(): void {
    if (this.label && this.input) {
      this.label.ref.nativeElement.setAttribute('for', this.input_id);
      this.input.ref.nativeElement.id = this.input_id;
    }
  }
}
