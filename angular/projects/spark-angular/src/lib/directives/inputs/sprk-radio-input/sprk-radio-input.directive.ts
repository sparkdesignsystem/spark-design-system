import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprkRadioInput]',
})
export class SprkRadioInputDirective {
  constructor(public ref: ElementRef) {}

  /**
   * This will be used to determine the variant of
   * the radio input.
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

  @HostBinding('class.sprk-b-SelectionInput') selectClass = true;
  @HostBinding('class.sprk-b-Radio__input') radioClass = true;
  @HostBinding('class.sprk-b-Radio__input--huge')
  get variantStr() {
    return this.variant === 'huge';
  }
  @HostBinding('attr.data-id')
  get idStr() {
    return this.idString;
  }
}
