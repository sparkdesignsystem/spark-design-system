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
  @HostBinding('class.sprk-b-SelectionInput') selectClass = true;
  @HostBinding('class.sprk-b-Radio__input') radioClass = true;
  @HostBinding('class.sprk-b-Radio__input--huge')
  get variantStr() {
    return this.variant === 'huge';
  }
}
