import { Component, ContentChild, Input, OnInit, Renderer2 } from '@angular/core';
import uniqueId from 'lodash/uniqueId';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';

@Component({
  selector: 'sprk-selection-item-container',
  template: `
    <div [ngClass]="getClasses()">
      <ng-content select="[sprkSelectionInput]"></ng-content>
      <ng-content select="[sprkSelectionLabel]"></ng-content>
      <ng-content></ng-content>
    </div>
  `
})
export class SprkSelectionItemContainerComponent implements OnInit {
  constructor( private renderer: Renderer2) {}
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * This component expects a child label element
   * with the `sprkSelectionLabel` directive.
   */
  @ContentChild(SprkSelectionLabelDirective, { static: true })
  label: SprkSelectionLabelDirective;
  /**
   * This component expects a child selection input
   * with the `sprkSelectionInput` directive.
   */
  @ContentChild(SprkSelectionInputDirective, { static: true })
  input: SprkSelectionInputDirective;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-b-SelectionContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  addInputTypeClasses(): void {
    const inputType = this.input.ref.nativeElement.type;
    if (inputType === 'checkbox') {
      this.renderer.addClass(this.input.ref.nativeElement, 'sprk-b-Checkbox__input');
      this.renderer.addClass(this.label.ref.nativeElement, 'sprk-b-Checkbox__label');
    }
    if (inputType === 'radio') {
      this.renderer.addClass(this.input.ref.nativeElement, 'sprk-b-Radio__input');
      this.renderer.addClass(this.label.ref.nativeElement, 'sprk-b-Radio__label');
    }
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
      this.addInputTypeClasses();
    }
  }
}
