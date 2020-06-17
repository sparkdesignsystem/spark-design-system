import { Component, Input, Renderer2, ContentChild, OnInit } from '@angular/core';
import uniqueId from 'lodash/uniqueId';
import { SprkRadioInputDirective } from '../../../directives/inputs/sprk-radio-input/sprk-radio-input.directive';
import { SprkRadioLabelDirective } from '../../../directives/inputs/sprk-radio-label/sprk-radio-label.directive';

@Component({
  selector: 'sprk-radio-item',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content></ng-content>
    </div>
  `,
})
export class SprkRadioItemComponent implements OnInit {
  constructor(private renderer: Renderer2) { }
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * This component expects a child label element
   * with the `sprkRadioLabel` directive.
   */
  @ContentChild(SprkRadioLabelDirective, { static: true })
  label: SprkRadioLabelDirective;
  /**
   * This component expects a child selection input
   * with the `sprkRadioInput` directive.
   */
  @ContentChild(SprkRadioInputDirective, { static: true })
  input: SprkRadioInputDirective;

  /**
   *
   */
  @Input()
  variant: string;
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
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-b-SelectionContainer', 'sprk-b-Radio'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    if (this.variant === 'huge') {
      classArray.push('sprk-b-Radio--huge');
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
      console.warn(`Spark Design System Warning - The value of 'for' (${labelFor}) on the label expects a matching 'id' on the input.`);
      return;
    }

    // Warn if 'for' and 'id' both exist but don't match
    if (inputId && labelFor && inputId !== labelFor) {
      console.warn(
        `Spark Design System Warning - The value of 'for' (${labelFor}) on the label should match the 'id' on the input (${inputId}).`
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
