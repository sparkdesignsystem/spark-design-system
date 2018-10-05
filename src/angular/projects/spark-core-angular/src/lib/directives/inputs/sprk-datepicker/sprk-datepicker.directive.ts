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
  @Input()
  config: object;

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
          .replace(/[^ -~]/g, ''),
      ...this.config
    };
    if (this.TinyDatePicker) {
      this.TinyDatePicker(input, tdpConfig);
    }
  }
}
