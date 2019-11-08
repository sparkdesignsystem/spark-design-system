import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkStackItem]'
})
export class SprkStackItemDirective implements OnInit {
  ngOnInit(): void {
    this.ref.nativeElement.classList.add('sprk-o-Stack__item');
  }

  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}
}
