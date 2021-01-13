import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { uniqueId } from 'lodash';
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
  `,
})
export class SprkSelectionContainerComponent implements AfterContentInit {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * This component expects a child label element
   * with the `sprkLabel` directive.
   */
  @ContentChild(SprkLabelDirective, { static: false })
  label: SprkLabelDirective;
  /**
   * This component expects a child element
   * with the `sprkFieldError` directive.
   */
  @ContentChild(SprkFieldErrorDirective, { static: false })
  error: SprkFieldErrorDirective;
  /**
   * This component expects a child
   * `<sprk-selection-item-container>` component.
   */
  @ContentChildren(SprkSelectionItemContainerComponent)
  selectionItems: QueryList<SprkSelectionItemContainerComponent>;

  /**
   * @ignore
   */
  id = uniqueId();
  /**
   * @ignore
   */
  error_id = `error_${this.id}`;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-b-InputContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
  /**
   * @ignore
   */
  ngAfterContentInit(): void {
    if (this.selectionItems && this.error) {
      this.selectionItems.forEach((item) => {
        item.input.ref.nativeElement.setAttribute(
          'aria-describedby',
          this.error_id,
        );
      });
      this.error.ref.nativeElement.id = this.error_id;
    }
  }
}
