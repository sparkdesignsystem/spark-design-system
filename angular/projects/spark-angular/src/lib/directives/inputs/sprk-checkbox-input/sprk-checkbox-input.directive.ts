import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprkCheckboxInput]',
})
export class SprkCheckboxInputDirective {
  constructor(public ref: ElementRef) {}

  /**
   * This will be used to determine the variant of
   * the checkbox input.
   */
  @Input()
  variant: 'huge' | undefined;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside
   * libraries to capture data.
   */
  @Input()
  analyticsString: string;

  @HostBinding('class.sprk-b-SelectionInput') selectClass = true;
  @HostBinding('class.sprk-b-Checkbox__input') checkboxClass = true;
  @HostBinding('class.sprk-b-Checkbox__input--huge')
  get variantStr() {
    return this.variant === 'huge';
  }
  @HostBinding('attr.data-id')
  get idStr() {
    return this.idString;
  }
  @HostBinding('attr.data-analytics')
  get analyticsStr() {
    return this.analyticsString;
  }
}
