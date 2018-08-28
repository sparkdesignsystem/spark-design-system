import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkStackItem]'
})
export class SprkStackItemDirective implements OnInit {
  @Input()
  analyticsString: string;
  @Input()
  additionalClasses: string;

  getClasses(): string[] {
    const classArray: string[] = ['sprk-o-Stack__item'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }

  constructor(public ref: ElementRef) {}
}
