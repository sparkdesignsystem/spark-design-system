import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  HostBinding,
  OnChanges,
} from '@angular/core';
import TinyDatePicker from 'tiny-date-picker';
import { has } from 'lodash';

@Directive({
  selector: '[sprkDatepicker]',
})
export class SprkDatepickerDirective implements OnInit, OnChanges {
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
   * If set to `false`, then
   * the error styles will be applied
   * to the input.
   */
  @Input()
  isValid: true;

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
   * @ignore
   * If the input is invalid and does not have the
   * error class, then add it. If the input
   * is valid and has the error class, remove it.
   */
  handleErrorStyles() {
    const hasErrorClass = this.ref.nativeElement.classList.contains(
      'sprk-b-TextInput--error',
    );

    if (!this.isValid && !hasErrorClass) {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-b-TextInput--error');
    } else if (this.isValid && hasErrorClass) {
      this.renderer.removeClass(
        this.ref.nativeElement,
        'sprk-b-TextInput--error',
      );
    }
  }

  ngOnChanges() {
    this.handleErrorStyles();
  }

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
