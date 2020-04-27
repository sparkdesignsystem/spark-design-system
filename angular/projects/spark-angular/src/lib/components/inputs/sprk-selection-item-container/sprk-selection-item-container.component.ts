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
  id = uniqueId();
  /**
   * @ignore
   */
  input_id = `input_${this.id}`;

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

  ngOnInit(): void {
    if (this.label && this.input) {
      this.renderer.setAttribute(this.label.ref.nativeElement, 'for', this.input_id);
      this.renderer.setProperty(this.input.ref.nativeElement, 'id', this.input_id);
    }
    this.addInputTypeClasses();
  }
}
