import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import TinyDatePicker from 'tiny-date-picker';

@Directive({
  selector: '[sprkDatepicker]'
})
export class SprkDatepickerDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}

  /**
   * Exposes configuration provided
   * by `tiny-date-picker`,
   * see [github](https://github.com/chrisdavies/tiny-date-picker) for documentation.
   */
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

        let event;

        if (typeof(Event) === 'function') {
          event = new Event('input');
        } else {
          event = document.createEvent('Event');
          event.initEvent('input', true, true);
        }

        this.ref.nativeElement.dispatchEvent(event);
        this.ref.nativeElement.focus();
      });
    }
  }
}
