import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sprkFormatterMonetary]'
})
export class SprkFormatterMonetaryDirective {

  constructor(public ref: ElementRef, private renderer: Renderer2) {}

  @HostBinding('attr.value') inputValue;
  @HostListener('blur', ['this.ref.nativeElement.value'])
  onBlur(value) {
    this.inputValue = this.formatMonetary(value);
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
