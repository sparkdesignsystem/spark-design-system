import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkFieldError]'
})
export class SprkFieldErrorDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}

  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-ErrorContainer'];
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
