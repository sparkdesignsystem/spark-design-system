import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sprkFormatterDate]'
})
export class SprkFormatterDateDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onFocus(value) {
    this.ref.nativeElement.value = this.formatDate(value);
  }

  formatDate(value): string {
    const m = value.match(
      // tslint:disable-next-line:max-line-length
      /^(((0[13578]|1[02])([/-]?)(0[1-9]|[12]\d|3[01])|(0[469]|11)([/-]?)(0[1-9]|[12]\d|30)|02([/-]?)((0[1-9])|[12]\d))(\4|\7|\9)[12]\d{3})?$/
    );

    let newValue = '';
    const cleanValue = value.replace(/[/-]/g, '');

    if (m) {
      for (let i = 0; i < cleanValue.length; i += 1) {
        if (i === 1 || i === 3) {
          newValue += `${cleanValue[i]}/`;
        } else {
          newValue += cleanValue[i];
        }
      }
      return newValue;
    } else {
      return value;
    }
  }
}
