import { Directive, ElementRef, HostListener, Attribute } from '@angular/core';
import { Validators } from '@angular/forms';

@Directive({
  selector: '[sprkFormatterMonetary]'
})
export class SprkFormatterMonetaryDirective {
  constructor(public ref: ElementRef) {}


  @HostListener('blur', ['this.ref.nativeElement.value'])
  onBlur(value) {
    this.ref.nativeElement.value = this.formatMonetary(value);
  }

  formatMonetary(value): void {
    let number;
    if (this.ref.nativeElement.validity.valid) {
      number = Number(value.replace(/[\$,]/g, ''));

      if (isNaN(number)) {
        return value;
      }

      return number
        .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        .replace(/\$/g, '');
    }
    return value;
  }
}
