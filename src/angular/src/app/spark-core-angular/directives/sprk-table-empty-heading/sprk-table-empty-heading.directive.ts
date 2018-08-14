import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-table-empty-heading]'
})

export class SprkTableEmptyHeadingDirective implements OnInit {
  @Input() additionalClasses: string;

  getClasses(): Array<String> {
   let classArray = ['sprk-b-Table__empty-heading'];
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

