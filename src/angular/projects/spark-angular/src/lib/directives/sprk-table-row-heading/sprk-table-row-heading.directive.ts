import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkTableRowHeading]'
})
export class SprkTableRowHeadingDirective implements OnInit {
  @Input()
  additionalClasses: string;

  getClasses(): string[] {
    const classArray = ['sprk-b-Table__row-heading'];
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
