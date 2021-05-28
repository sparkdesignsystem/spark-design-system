import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkAutocompleteInputContainer]',
})
export class SprkAutocompleteInputContainerDirective {
  constructor(public ref: ElementRef) {}

  @HostBinding('class.sprk-b-TextInputIconContainer') inputIconClass = true;
}
