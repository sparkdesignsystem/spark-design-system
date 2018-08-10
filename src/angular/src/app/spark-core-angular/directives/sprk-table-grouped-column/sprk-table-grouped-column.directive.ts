import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-table-grouped-column]'
})

export class SprkTableGroupedColumnDirective implements OnInit {
  @Input() additionalClasses: string;

  getClasses(): Array<String> {
   let classArray = ['sprk-c-Table__grouped-column'];
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

