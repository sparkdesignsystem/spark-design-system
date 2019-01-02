import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[sprkInput]'
})
export class SprkInputDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  ngOnInit(): void {
    if (this.ref.nativeElement.nodeName === 'SELECT') {
      this.ref.nativeElement.classList.add('sprk-b-Select');
    } else {
      this.ref.nativeElement.classList.add('sprk-b-TextInput');
      this.ref.nativeElement.classList.add('sprk-u-Width-100');
    }
  }
}
