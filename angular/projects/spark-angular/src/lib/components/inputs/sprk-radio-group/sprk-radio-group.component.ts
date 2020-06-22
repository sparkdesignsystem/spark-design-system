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
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';

@Component({
  selector: 'sprk-radio-group',
  template: `
    <div [ngClass]="getClasses()">
      <ng-content select="[beforeSprkRadios]"></ng-content>
      <fieldset *ngIf="label; else sprkRadios" class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <ng-content select="[sprkLabel]"></ng-content>
        </legend>
        <ng-container *ngTemplateOutlet="sprkRadios"></ng-container>
      </fieldset>

      <ng-template #sprkRadios>
        <ng-content></ng-content>
      </ng-template>

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
   *
   */
  @Input()
  variant: string;

  /**
   * This component can have an optional child element
   * with the `sprkLabel` directive for the legend.
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
   * This component expects children
   * `<sprk-radio-item>` components.
   */
  @ContentChildren(SprkRadioItemComponent)
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
