import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprkRadioInput]'
})
export class SprkRadioInputDirective {
  constructor(public ref: ElementRef) { }

  @Input() variant: string;
  @HostBinding('class.sprk-b-SelectionInput') selectClass = true;
  @HostBinding('class.sprk-b-Radio__input') radioClass = true;
  @HostBinding('class.sprk-b-Radio__input--huge')
  get variantStr() {
    return this.variant === 'huge';
  }
}
