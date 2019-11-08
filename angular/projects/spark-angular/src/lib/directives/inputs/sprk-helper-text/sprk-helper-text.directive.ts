import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkHelperText]'
})
export class SprkHelperTextDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-HelperText'];
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
