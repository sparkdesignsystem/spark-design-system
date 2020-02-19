import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sprkFormatterMonetary]'
})
export class SprkFormatterMonetaryDirective {

  constructor(public ref: ElementRef, private renderer: Renderer2) {}

  @HostBinding('attr.value') myValue;

  @HostListener('blur', ['this.ref.nativeElement.value'])
  onFocus(value) {
    console.log(this.ref.nativeElement, 'nativeElement');
    this.myValue = this.formatMonetary(value);
    this.ref.nativeElement.value = this.formatMonetary(value);
    this.renderer.addClass(
      this.ref.nativeElement,
      'sprk-b-TextInput--has-value'
    );

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
