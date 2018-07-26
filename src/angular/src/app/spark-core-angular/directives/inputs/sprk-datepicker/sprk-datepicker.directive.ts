import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import TinyDatePicker from 'tiny-date-picker';
import getArrowClass from '@sparkdesignsystem/spark-core/utilities/getArrowClass';

@Directive({
  selector: '[sprk-datepicker]'
})

export class SprkDatepickerDirective implements OnInit {

  constructor(public ref: ElementRef){};
  @Input() minDate: string = '01/1/2008';
  @Input() maxDate: string = '01/1/2068';

  ngOnInit(): void {
    let input = this.ref.nativeElement;
    if(TinyDatePicker) {
      const dp = TinyDatePicker(input, {
        mode: 'dp-below',
        min: this.minDate,
        max: this.maxDate,

        format(date) {
          return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/[^ -~]/g, '');
        },
      });

      dp.on('open', () => {
        const rect = input.getBoundingClientRect();
        const cal = document.querySelector('.dp');

        cal.classList.remove('dp-above-top');
        cal.classList.remove('dp-below-top');
        cal.classList.add(getArrowClass(rect, window.pageYOffset, window.innerHeight));
      });
    }
  }
}
