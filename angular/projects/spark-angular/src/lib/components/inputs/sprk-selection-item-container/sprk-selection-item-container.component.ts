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
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * This component expects a child label element
   * with the `sprkSelectionLabel` directive.
   */
  @ContentChild(SprkSelectionLabelDirective, { static: true })
  label: SprkSelectionLabelDirective;
  /**
   * This component expects a child selection input
   * with the `sprkSelectionInput` directive.
   */
  @ContentChild(SprkSelectionInputDirective, { static: true })
  input: SprkSelectionInputDirective;

  /**
   * @ignore
   */
  id = _.uniqueId();
  /**
   * @ignore
   */
  input_id = `input_${this.id}`;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-b-SelectionContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
  /**
   * @ignore
   */
  ngOnInit(): void {
    if (this.label && this.input) {
      this.label.ref.nativeElement.setAttribute('for', this.input_id);
      this.input.ref.nativeElement.id = this.input_id;
    }
  }
}
