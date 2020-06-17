import { Directive, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprkRadioLabel]'
})
export class SprkRadioLabelDirective {
  constructor(public ref: ElementRef) { }

  @Input() variant: string;
  @Input() isDisabled: boolean;
  @HostBinding('class.sprk-b-Label') selectClass = true;
  @HostBinding('class.sprk-b-Radio__label') radioClass = true;
  @HostBinding('class.sprk-b-Radio__label--huge')
  get variantStr() {
    return this.variant === 'huge';
  }
  @HostBinding('class.sprk-b-Label--disabled')
  get disabled() {
    return this.isDisabled;
  }
}
