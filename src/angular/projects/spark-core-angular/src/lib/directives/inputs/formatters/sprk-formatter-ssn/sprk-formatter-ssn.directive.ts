import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sprkFormatterSsn]'
})
export class SprkFormatterSsnDirective {
  constructor(public ref: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onFocus(value) {
    this.ref.nativeElement.value = this.formatSSN(value);
  }

  formatSSN(value): string {
    const m = value.match(
      /(^(?!666|000|9\d{2})\d{3}([-]{0,1})(?!00)\d{2}\1(?!0{4})\2\d{4}$)|^$/
    );
    if (m) {
      let val = value.trim().replace(/[ -]/g, '');
      let newVal = '';
      const sizes = [3, 2, 4];

      sizes.forEach(size => {
        if (val.length > size) {
          newVal += `${val.substr(0, size)}-`;
          val = val.substr(size);
        }
      });

      newVal += val;
      return newVal;
    }
    return value;
  }
}
