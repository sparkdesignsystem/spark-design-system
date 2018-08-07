import { Directive, Input, OnInit, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: '[sprk-datepicker]'
})

export class SprkDatepickerDirective implements OnInit {

  constructor(
    public ref: ElementRef,
    @Inject('TinyDatePicker') public TinyDatePicker: any
  ){};

  @Input() minDate: string = '01/1/2008';
  @Input() maxDate: string = '01/1/2068';

  ngOnInit(): void {
    let input = this.ref.nativeElement;
    if(this.TinyDatePicker) {
      const dp = this.TinyDatePicker(input, {
        mode: 'dp-below',
        min: this.minDate,
        max: this.maxDate,

        format(date) {
          return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
            .replace(/[^ -~]/g, '');
        },
      });
    }
  }
}
