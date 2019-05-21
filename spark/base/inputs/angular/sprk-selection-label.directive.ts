import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkSelectionLabel]'
})
export class SprkSelectionLabelDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-Label', 'sprk-b-Label--inline'];
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
