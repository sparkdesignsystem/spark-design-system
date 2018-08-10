import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-table-head]'
})

export class SprkTableHeadDirective implements OnInit {
  @Input() additionalClasses: string;

  getClasses(): Array<String> {
   let classArray = ['sprk-c-Table__head'];
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

