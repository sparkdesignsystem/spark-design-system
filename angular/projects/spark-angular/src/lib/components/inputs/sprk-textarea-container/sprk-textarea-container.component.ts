import {
  Component,
  ContentChild,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { uniqueId } from 'lodash';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkTextareaDirective } from '../../../directives/inputs/sprk-textarea/sprk-textarea.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';

@Component({
  selector: 'sprk-textarea-container',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content select="[sprkLabel]"></ng-content>
      <ng-content select="[sprkInput]"></ng-content>
      <ng-content select="[sprkTextarea]"></ng-content>
      <ng-content select="sprk-selection-item-container"></ng-content>
      <ng-content select="sprk-checkbox-item"></ng-content>
      <ng-content select="[sprkHelperText]"></ng-content>
      <ng-content select="[sprkFieldError]"></ng-content>
      <ng-content select="[afterSprkTextarea]"></ng-content>
    </div>
  `,
})
export class SprkTextareaContainerComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
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
   * This component expects a child label element
   * with the `sprkLabel` directive.
   */
  @ContentChild(SprkLabelDirective, { static: true })
  label: SprkLabelDirective;
  /**
   * This component expects a child input element
   * with the `sprkInput` directive.
   */
  @ContentChild(SprkInputDirective, { static: true })
  input: SprkInputDirective;
  /**
   * This component expects a child input element
   * with the `sprkInput` directive.
   */
  @ContentChild(SprkTextareaDirective, { static: true })
  textarea: SprkTextareaDirective;
  /**
   * This component expects a child element
   * with the `sprkFieldError` directive.
   */
  @ContentChild(SprkFieldErrorDirective, { static: true })
  error: SprkFieldErrorDirective;

  /**
   * @ignore
   */
  id = uniqueId();
  /**
   * @ignore
   */
  input_id = `input_${this.id}`;
  /**
   * @ignore
   */
  error_id = `error_${this.id}`;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-b-InputContainer',
      'sprk-b-InputContainer--textarea',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  hasID(element): boolean {
    return element.id.length > 0;
  }

  hasFor(element): boolean {
    return element.htmlFor.length > 0;
  }

  hasMatchingForAndID(label, input): boolean {
    if (!this.hasFor(label) || !this.hasID(input)) {
      return;
    }
    return label.htmlFor === input.id;
  }

  ngOnInit(): void {
    const inputEl = this.textarea || this.input;
    if (!this.label || !inputEl) {
      return;
    }

    /**
     * If the label and the input both do not
     * have a for or id then add custom ones.
     */
    if (
      !this.hasID(inputEl.ref.nativeElement) &&
      !this.hasFor(this.label.ref.nativeElement)
    ) {
      this.renderer.setAttribute(
        this.label.ref.nativeElement,
        'for',
        this.input_id,
      );
      this.renderer.setAttribute(
        inputEl.ref.nativeElement,
        'id',
        this.input_id,
      );
    }

    /**
     * If the input has an id
     * but the label has no for
     * then set the for the match the id.
     */
    if (
      this.hasID(inputEl.ref.nativeElement) &&
      !this.hasFor(this.label.ref.nativeElement)
    ) {
      this.renderer.setAttribute(
        this.label.ref.nativeElement,
        'for',
        inputEl.ref.nativeElement.id,
      );
    }

    /**
     * If the label has a for
     * but the input has no id
     * then set the id the match the for.
     */
    if (
      this.hasFor(this.label.ref.nativeElement) &&
      !this.hasID(inputEl.ref.nativeElement)
    ) {
      this.renderer.setAttribute(
        inputEl.ref.nativeElement,
        'id',
        this.label.ref.nativeElement.htmlFor,
      );
    }

    /**
     * If the label for and the input id
     * are there but mismatching, use the id
     * value for the for attribute on the label.
     * This is because input ids and labels
     * need to match and there is no reason
     * they should not match for a11y.
     */
    if (
      !this.hasMatchingForAndID(
        this.label.ref.nativeElement,
        inputEl.ref.nativeElement,
      )
    ) {
      this.renderer.setAttribute(
        this.label.ref.nativeElement,
        'for',
        inputEl.ref.nativeElement.id,
      );
    }

    /**
     * If there is an error container
     * with an id then match the aria-describedby
     * on the input to the id on the
     * error container.
     */
    if (this.error && this.hasID(this.error.ref.nativeElement)) {
      this.renderer.setAttribute(
        inputEl.ref.nativeElement,
        'aria-describedby',
        this.error.ref.nativeElement.id,
      );
    }

    /**
     * If there is an error container
     * and it does not have an id
     * then use custom id for the
     * error and aria.
     */
    if (this.error && !this.hasID(this.error.ref.nativeElement)) {
      this.renderer.setAttribute(
        inputEl.ref.nativeElement,
        'aria-describedby',
        this.error_id,
      );

      this.renderer.setAttribute(
        this.error.ref.nativeElement,
        'id',
        this.error_id,
      );
    }
  }
}
