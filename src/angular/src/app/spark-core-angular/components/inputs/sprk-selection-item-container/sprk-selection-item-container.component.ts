import { OnInit, Component, Input, ContentChild } from '@angular/core';
import * as _ from 'lodash';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';

@Component({
  selector: 'sprk-selection-item-container',
  template: `
    <div [ngClass]="getClasses()">
      <ng-content select="[sprk-selection-input]"></ng-content>
      <ng-content select="[sprk-selection-label]"></ng-content>
    </div>`,
  styles: ['']
})

export class SparkSelectionItemContainerComponent implements OnInit {
  @Input() additionalClasses: string;

  @ContentChild(SprkSelectionLabelDirective) label: SprkSelectionLabelDirective;
  @ContentChild(SprkSelectionInputDirective) input: SprkSelectionInputDirective;

  id = _.uniqueId();
  input_id= `input_${this.id}`;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-b-SelectionContainer'
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
  }
}
