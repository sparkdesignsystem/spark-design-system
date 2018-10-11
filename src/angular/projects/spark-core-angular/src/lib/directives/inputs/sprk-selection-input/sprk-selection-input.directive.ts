import { Directive, ElementRef, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkSelectionInput]'
})
export class SprkSelectionInputDirective implements OnInit, OnChanges {
  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = [];
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }

  ngOnChanges(): void {
    this.ref.nativeElement.setAttribute('class', '');
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
