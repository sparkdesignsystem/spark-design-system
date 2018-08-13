import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-table-row-heading]'
})

export class SprkTableRowHeadingDirective implements OnInit {
  @Input() additionalClasses: string;

  getClasses(): Array<String> {
   let classArray = ['sprk-b-Table__row-heading'];
   if (this.additionalClasses) {
     this.additionalClasses.split(' ').forEach((className) => {
       classArray.push(className);
     });
   }
   return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((className) => {
      this.ref.nativeElement.classList.add(className);
    });
  }

  constructor(public ref: ElementRef) {}

}

