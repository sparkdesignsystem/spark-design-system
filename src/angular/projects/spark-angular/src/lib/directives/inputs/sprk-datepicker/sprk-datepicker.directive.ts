import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import TinyDatePicker from 'tiny-date-picker';

@Directive({
  selector: '[sprkDatepicker]'
})
export class SprkDatepickerDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  @Input()
  sprkDatePickerConfig: object;

  ngOnInit(): void {
    const input = this.ref.nativeElement;
    const tdpConfig = {
      mode: 'dp-below',
      lang: {
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      },
      min: '01/1/2008',
      max: '01/1/2068',
      format: date =>
        date
          .toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          })
          .replace(/[^ -~]/g, '')
    };

    if (TinyDatePicker) {
      TinyDatePicker(input, {
        ...tdpConfig,
        ...this.sprkDatePickerConfig
      }).on('select', () => {
        this.ref.nativeElement.dispatchEvent(new Event('input'));
        this.ref.nativeElement.focus();
      });
    }
  }
}
