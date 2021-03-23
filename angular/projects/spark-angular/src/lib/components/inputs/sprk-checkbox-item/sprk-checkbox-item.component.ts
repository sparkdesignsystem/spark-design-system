import {
  Component,
  Input,
  Renderer2,
  ContentChild,
  OnInit,
} from '@angular/core';
import uniqueId from 'lodash/uniqueId';
import { SprkCheckboxInputDirective } from '../../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.directive';
import { SprkCheckboxLabelDirective } from '../../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.directive';

@Component({
  selector: 'sprk-checkbox-item',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content></ng-content>
    </div>
  `,
})
export class SprkCheckboxItemComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * This component expects a child label element
   * with the `sprkCheckboxLabel` directive.
   */
  @ContentChild(SprkCheckboxLabelDirective, { static: true })
  label: SprkCheckboxLabelDirective;

  /**
   * This component expects a child checkbox input
   * with the `sprkCheckboxInput` directive.
   */
  @ContentChild(SprkCheckboxInputDirective, { static: true })
  input: SprkCheckboxInputDirective;

  /**
   * This will be used to determine the variant of
   * the checkbox item.
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
   * If `true`, the checkbox item will receive styling to make it a
   * visibility toggle. Use this for "Show Password" checkboxes.
   */
  @Input()
  isVisibilityToggle: boolean;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-b-SelectionContainer',
      'sprk-b-Checkbox',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    if (this.variant === 'huge') {
      classArray.push('sprk-b-Checkbox--huge');
    }

    if (this.isVisibilityToggle) {
      classArray.push('sprk-b-InputContainer__visibility-toggle');
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  generateIdForInput(): void {
    let inputId = this.input.ref.nativeElement.id;
    const labelFor = this.label.ref.nativeElement.htmlFor;

    // Warn if 'for' exists but the 'id' does not
    if (labelFor && !inputId) {
      console.warn(
        `Spark Design System Warning - The value of 'for' (${labelFor}) on the label expects a matching 'id' on the input.`,
      );
      return;
    }

    // Warn if 'for' and 'id' both exist but don't match
    if (inputId && labelFor && inputId !== labelFor) {
      console.warn(
        `Spark Design System Warning - The value of 'for' (${labelFor}) on the label should match the 'id' on the input (${inputId}).`,
      );
      return;
    }

    // If we don't have a valid id, generate one with lodash
    if (!inputId) {
      inputId = uniqueId(`sprk_input_`);
      this.renderer.setProperty(this.input.ref.nativeElement, 'id', inputId);
      this.renderer.setAttribute(this.label.ref.nativeElement, 'for', inputId);
    }
  }

  ngOnInit(): void {
    if (this.label && this.input) {
      this.generateIdForInput();
    }
  }
}
