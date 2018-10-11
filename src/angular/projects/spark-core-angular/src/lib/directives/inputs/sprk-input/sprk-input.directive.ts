import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[sprkInput]'
})
export class SprkInputDirective implements OnInit {
  @Input()
  additionalClasses: string;
  @Input()
  valid = true;

  @HostListener('focusin')
  onFocusIn() {
    this.ref.nativeElement.classList.add('sprk-b-TextInput--focusin');
    this.ref.nativeElement.classList.remove('sprk-b-TextInput--focusout');
  }

  @HostListener('input')
  onInput() {
    if (this.ref.nativeElement.value) {
      this.ref.nativeElement.classList.add('sprk-b-TextInput--has-value');
    } else {
      this.ref.nativeElement.classList.remove('sprk-b-TextInput--has-value');
    }
  }

  @HostListener('focusout')
  onFocusOut() {
    this.ref.nativeElement.classList.add('sprk-b-TextInput--focusout');
    this.ref.nativeElement.classList.remove('sprk-b-TextInput--focusin');
  }

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
