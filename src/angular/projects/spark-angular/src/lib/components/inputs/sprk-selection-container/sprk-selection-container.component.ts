import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';
import * as _ from 'lodash';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkSelectionItemContainerComponent } from '../sprk-selection-item-container/sprk-selection-item-container.component';

@Component({
  selector: 'sprk-selection-container',
  template: `
    <div [ngClass]="getClasses()">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <ng-content select="[sprkLabel]"></ng-content>
        </legend>
        <ng-content select="sprk-selection-item-container"></ng-content>
      </fieldset>
      <ng-content select="[sprkHelperText]"></ng-content>
      <ng-content select="[sprkFieldError]"></ng-content>
      <ng-content></ng-content>
    </div>
  `
})
export class SprkSelectionContainerComponent implements AfterContentInit {
  @Input()
  additionalClasses: string;

  @ContentChild(SprkLabelDirective, { static: false })
  label: SprkLabelDirective;
  @ContentChild(SprkFieldErrorDirective, { static: false })
  error: SprkFieldErrorDirective;
  @ContentChildren(SprkSelectionItemContainerComponent)
  selectionItems: QueryList<SprkSelectionItemContainerComponent>;

  id = _.uniqueId();
  error_id = `error_${this.id}`;

  getClasses(): string {
    const classArray: string[] = ['sprk-b-InputContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngAfterContentInit(): void {
    if (this.selectionItems && this.error) {
      this.selectionItems.forEach(item => {
        item.input.ref.nativeElement.setAttribute(
          'aria-describedby',
          this.error_id
        );
      });
      this.error.ref.nativeElement.id = this.error_id;
    }
  }
}
