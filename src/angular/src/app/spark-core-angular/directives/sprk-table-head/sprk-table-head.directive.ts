import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkTableHead]'
})
export class SprkTableHeadDirective implements OnInit {
  @Input()
  additionalClasses: string;

  getClasses(): string[] {
    const classArray = ['sprk-b-Table__head'];
    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(className => {
      this.ref.nativeElement.classList.add(className);
    });
  }

  constructor(public ref: ElementRef) {}
}
