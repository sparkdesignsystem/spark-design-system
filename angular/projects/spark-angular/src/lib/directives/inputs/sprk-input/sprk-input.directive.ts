import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[sprkInput]',
})
export class SprkInputDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}

  /**
   * If set to `false`, then
   * the error styles will be applied
   * to the input.
   */
  @Input()
  isValid: boolean;

  // /**
  //  * If set to `true`, then
  //  * the icon styles will be applied
  //  * to the input.
  //  */
  // @Input()
  // hasIcon: boolean;

  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @HostBinding('attr.data-id')
  @Input()
  idString: string;

  /**
   * @ignore
   */
  @HostListener('change', ['$event'])
  OnChange($event) {
    const value = (this.ref.nativeElement as HTMLInputElement).value;
    if (value.length > 0) {
      this.ref.nativeElement.classList.add('sprk-b-Input--has-floating-label');
    } else {
      this.ref.nativeElement.classList.remove(
        'sprk-b-Input--has-floating-label',
      );
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

    if ((this.ref.nativeElement as HTMLInputElement).value.length > 0) {
      this.ref.nativeElement.classList.add('sprk-b-Input--has-floating-label');
    }
    this.ref.nativeElement.classList.add('sprk-u-Width-100');
  }
}
