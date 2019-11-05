import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkSelectionInput]'
})
export class SprkSelectionInputDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-SelectionInput'];
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
