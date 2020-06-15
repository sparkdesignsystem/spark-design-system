import {
  Component,
  AfterContentInit,
  Input,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { uniqueId } from 'lodash';
import { SprkRadioComponent } from '../sprk-radio/sprk-radio.component';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';

@Component({
  selector: 'sprk-radio-group',
  template: `
    <div [ngClass]="getClasses()">
      <fieldset *ngIf="label; else sprkRadios" class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend" sprkLabel>
          <ng-content select="[sprkLabel]"></ng-content>
        </legend>
        <ng-container *ngTemplateOutlet="sprkRadios"></ng-container>
      </fieldset>

      <ng-template #sprkRadios>
        <ng-content select="sprk-radio"></ng-content>
      </ng-template>

      <ng-content select="[sprkHelperText]"></ng-content>
      <ng-content select="[sprkFieldError]"></ng-content>
      <ng-content></ng-content>
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
   * This component expects a child element
   * with the `sprkFieldError` directive.
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
   * `<sprk-radio>` components.
   */
  @ContentChildren(SprkRadioComponent)
  radios: QueryList<SprkRadioComponent>;

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
    console.log(this.error, 'error');
    if (this.radios && this.error) {
      this.radios.forEach((radio) => {
        // radio.input.ref.nativeElement.setAttribute(
        //   'aria-describedby',
        //   this.error_id
        // );
      });
      this.error.ref.nativeElement.id = this.error_id;
    }
  }
}
