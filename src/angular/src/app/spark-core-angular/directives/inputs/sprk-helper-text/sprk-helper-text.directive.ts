import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkHelperText]'
})
export class SprkHelperTextDirective implements OnInit {
  @Input()
  additionalClasses: string;

  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-HelperText'];

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
}
