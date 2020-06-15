import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { SprkSelectionLabelDirective } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkSelectionInputDirective } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';

@Component({
  selector: 'sprk-radio',
  template: `
    <div [ngClass]="getClasses()">
      <input
        [ngClass]="inputGetClasses()"
        type="radio"
        value="1"
        name="radio_input"
        data-id="radio-1"
        id="radio-1"
        (change)="onRadioSelect($event)"
      />
      <label [ngClass]="labelGetClasses()" for="radio-1">
        <ng-content></ng-content>
      </label>
    </div>
  `,
})
export class SprkRadioComponent implements OnInit {
  constructor() {}
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
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  labelAdditionalClasses: string;

  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  inputAdditionalClasses: string;

  /**
   * @ignore
   */
  labelGetClasses(): string {
    const classArray: string[] = [
      'sprk-b-Label',
      'sprk-b-Label--inline',
      'sprk-b-Radio__label',
    ];

    if (this.labelAdditionalClasses) {
      this.labelAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    if (this.variant === 'huge') {
      classArray.push('sprk-b-Radio__label--huge');
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  inputGetClasses(): string {
    const classArray: string[] = [
      'sprk-b-SelectionInput',
      'sprk-b-Radio__input',
    ];

    if (this.inputAdditionalClasses) {
      this.inputAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    if (this.variant === 'huge') {
      classArray.push('sprk-b-Radio__input--huge');
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-b-SelectionContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    if (this.variant === 'huge') {
      classArray.push('sprk-b-SelectionContainer--huge');
    }

    return classArray.join(' ');
  }

  ngOnInit(): void {}
  // how to do ngModel on the input
}
