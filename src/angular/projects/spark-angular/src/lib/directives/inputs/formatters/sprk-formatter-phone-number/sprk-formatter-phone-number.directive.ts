import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sprkFormatterPhoneNumber]'
})
export class SprkFormatterPhoneNumberDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onFocus(value) {
    this.ref.nativeElement.value = this.formatPhone(value);
  }

  formatPhone(value): string {
    const newValue = `${value}`.replace(/\D/g, '');
    const m = newValue.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (m) {
      return `(${m[1]}) ${m[2]}-${m[3]}`;
    } else {
      return value;
    }
  }
}
