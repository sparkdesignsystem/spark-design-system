import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkDatepicker]'
})
export class SprkDatepickerDirective implements OnInit {
  constructor(
    public ref: ElementRef,
    @Inject('TinyDatePicker') public TinyDatePicker: any
  ) {}

  @Input()
  minDate = '01/1/2008';
  @Input()
  maxDate = '01/1/2068';

  ngOnInit(): void {
    const input = this.ref.nativeElement;
    if (this.TinyDatePicker) {
      this.TinyDatePicker(input, {
        mode: 'dp-below',
        min: this.minDate,
        max: this.maxDate,

        format(date) {
          return date
            .toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric'
            })
            .replace(/[^ -~]/g, '');
        }
      });
    }
  }
}
