import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sprkFormatterMonetary]'
})
export class SprkFormatterMonetaryDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('blur', ['$event.target.value'])
  onFocus(value) {
    this.ref.nativeElement.value = this.formatMonetary(value);
    this.ref.nativeElement.classList.add('sprk-b-TextInput--has-value');
  }

  formatMonetary(value): void {
    const m = value.match(/(^\$?(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$)|^$/);
    let number;
    if (m) {
      number = Number(value.replace(/[\$,]/g, ''));
      return number
        .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        .replace(/\$/g, '');
    }

    return value;
  }
}
