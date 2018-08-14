import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-formatter-monetary]'
})

export class SprkFormatterMonetaryDirective {

  constructor(public ref: ElementRef){};

  @HostListener('blur', ["$event.target.value"])
  onFocus(value) {
    this.ref.nativeElement.value = this.formatMonetary(value);
  }

  formatMonetary(value): void {
    let m = value.match(/(^\$?(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$)|^$/);
    let number;
    if(m) {
      number = Number(value.replace(/[\$,]/g, ''));
      return number.toLocaleString('en-US', { style: 'currency', currency: 'USD'}).replace(/\$/g,'');
    }

    return value;
  }
}
