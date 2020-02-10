import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkBox]'
})
export class SprkBoxDirective implements OnInit {
  ngOnInit(): void {
    this.ref.nativeElement.classList.add('sprk-o-Box');
  }

  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}
}
