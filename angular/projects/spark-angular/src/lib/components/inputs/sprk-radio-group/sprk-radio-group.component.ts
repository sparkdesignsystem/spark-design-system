import {
  Component,
  AfterContentInit,
  Input,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { uniqueId } from 'lodash';
import { SprkRadioItemComponent } from '../sprk-radio-item/sprk-radio-item.component';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';

@Component({
  selector: 'sprk-radio-group',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content></ng-content>
      <ng-content select="[sprkHelperText]"></ng-content>
      <ng-content select="[sprkFieldError]"></ng-content>
      <ng-content select="[afterSprkRadios]"></ng-content>
    </div>
  `,
})
export class SprkRadioGroupComponent implements AfterContentInit {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * This will be used to determine the variant of
   * the radio group.
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
   * `<sprk-radio-item>` components.
   */
  @ContentChildren(SprkRadioItemComponent, { descendants: true })
  radios: QueryList<SprkRadioItemComponent>;

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
    if (this.radios && this.error) {
      this.radios.forEach((radio) => {
        radio.input.ref.nativeElement.setAttribute(
          'aria-describedby',
          this.error_id,
        );
      });
      this.error.ref.nativeElement.id = this.error_id;
    }
  }
}
