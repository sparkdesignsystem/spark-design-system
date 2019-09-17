import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[sprkInput]'
})
export class SprkInputDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  @HostListener('change')
  OnChange($event) {
    const value = (this.ref.nativeElement as HTMLInputElement).value;
    if (value.length > 0) {
      this.ref.nativeElement.classList.add('sprk-b-Input--has-floating-label');
    } else {
      this.ref.nativeElement.classList.remove('sprk-b-Input--has-floating-label');
    }
  }

  ngOnInit(): void {
    if (this.ref.nativeElement.nodeName === 'SELECT') {
      this.ref.nativeElement.classList.add('sprk-b-Select');
    } else if (this.ref.nativeElement.nodeName === 'TEXTAREA') {
      this.ref.nativeElement.classList.add('sprk-b-TextInput');
      this.ref.nativeElement.classList.add('sprk-b-TextArea');
    } else {
      this.ref.nativeElement.classList.add('sprk-b-TextInput');
    }

    this.ref.nativeElement.classList.add('sprk-u-Width-100');
  }
}
