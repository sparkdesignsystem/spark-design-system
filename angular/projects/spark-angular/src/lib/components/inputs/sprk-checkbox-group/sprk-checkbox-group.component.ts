import {
  Component,
  AfterContentInit,
  Input,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { uniqueId } from 'lodash';
import { SprkCheckboxItemComponent } from '../sprk-checkbox-item/sprk-checkbox-item.component';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';

@Component({
  selector: 'sprk-checkbox-group',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content></ng-content>
      <ng-content select="[sprkHelperText]"></ng-content>
      <ng-content select="[sprkFieldError]"></ng-content>
      <ng-content select="[afterSprkCheckboxes]"></ng-content>
    </div>
  `,
})
export class SprkCheckboxGroupComponent implements AfterContentInit {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * This will be used to determine the variant of
   * the checkbox group.
   */
  @Input()
  variant: 'huge' | undefined;

  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  /**
   * This component expects a child element
   * with the `sprkFieldError` directive.
   */
  @ContentChild(SprkFieldErrorDirective, { static: false })
  error: SprkFieldErrorDirective;

  /**
   * This component expects children
   * `<sprk-checkbox-item>` components.
   */
  @ContentChildren(SprkCheckboxItemComponent, { descendants: true })
  checkboxes: QueryList<SprkCheckboxItemComponent>;

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

    if (this.variant === 'huge') {
      classArray.push('sprk-b-InputContainer--huge');
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  ngAfterContentInit(): void {
    if (this.checkboxes && this.error) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.input.ref.nativeElement.setAttribute(
          'aria-describedby',
          this.error.ref.nativeElement.id || this.error_id,
        );
      });

      if (!this.error.ref.nativeElement.id) {
        this.error.ref.nativeElement.id = this.error_id;
      }
    }
  }
}
