import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sprkFormatterMonetary]'
})
export class SprkFormatterMonetaryDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('blur', ['this.ref.nativeElement.value'])
  onBlur(value) {
    this.ref.nativeElement.value = this.formatMonetary(value);

    // trigger validation again after setting the value
    let event;

    if (typeof Event === 'function') {
      event = new Event('input');
    } else {
      event = document.createEvent('Event');
      event.initEvent('input', true, true);
    }

    this.ref.nativeElement.dispatchEvent(event);
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
