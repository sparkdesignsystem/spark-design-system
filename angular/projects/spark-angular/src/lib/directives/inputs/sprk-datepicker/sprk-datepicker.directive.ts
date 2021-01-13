import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  HostBinding,
} from '@angular/core';
import TinyDatePicker from 'tiny-date-picker';

@Directive({
  selector: '[sprkDatepicker]',
})
export class SprkDatepickerDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

  /**
   * Exposes configuration provided
   * by `tiny-date-picker`,
   * see [github](https://github.com/chrisdavies/tiny-date-picker) for documentation.
   */
  @Input()
  sprkDatePickerConfig: object;

  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @HostBinding('attr.data-id')
  @Input()
  idString: string;

  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the element.
   * Intended for an outside
   * library to capture data.
   */
  @HostBinding('attr.data-analytics')
  @Input()
  analyticsString: string;

  ngOnInit(): void {
    const input = this.ref.nativeElement;
    const tdpConfig = {
      mode: 'dp-below',
      lang: {
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      },
      min: '01/1/2008',
      max: '01/1/2068',
      format: (date) =>
        date
          .toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          })
          .replace(/[^ -~]/g, ''),
    };

    this.renderer.addClass(this.ref.nativeElement, 'sprk-b-TextInput');
    this.renderer.addClass(this.ref.nativeElement, 'sprk-u-Width-100');
    this.renderer.addClass(
      this.ref.nativeElement,
      'sprk-b-TextInput--has-svg-icon',
    );

    if (TinyDatePicker) {
      TinyDatePicker(input, {
        ...tdpConfig,
        ...this.sprkDatePickerConfig,
      }).on('select', () => {
        let event;

        if (typeof Event === 'function') {
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
