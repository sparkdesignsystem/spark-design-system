import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkLabel]'
})
export class SprkLabelDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-Label'];
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
