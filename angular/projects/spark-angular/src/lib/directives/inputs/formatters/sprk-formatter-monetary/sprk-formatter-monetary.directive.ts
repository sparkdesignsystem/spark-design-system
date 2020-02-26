import { Directive, ElementRef, HostListener, Attribute } from '@angular/core';
import { Validators } from '@angular/forms';

@Directive({
  selector: '[sprkFormatterMonetary]'
})
export class SprkFormatterMonetaryDirective {
  constructor(public ref: ElementRef, @Attribute('validateEqual') public validateEqual: string) {}


  @HostListener('blur', ['this.ref.nativeElement.value'])
  onBlur(value) {
    this.ref.nativeElement.value = this.formatMonetary(value);
  }

  formatMonetary(value): void {
    // figure out if the field is valid based on ANGULAR'S decision if it's valid and not this pattern
    // Why does the validator not run again on it's own when it's suppose to (34.345d => erase d)

    // tslint:disable-next-line: max-line-length
    // Hypothesis: maybe the formatter is writing to the field with the formatted value, and this formatting does not trigger validation.If so, they maybe that's legit, but we'd like to know that's the reason. Otherwise this feels like a bug workaround

    // tslint:disable-next-line: max-line-length
    // Go on a starter code box, make an input, bind an input event handler, write code that updates the value, check whether or not the handler gets run


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
