import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input,
  HostBinding,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[sprkSelect]',
})
export class SprkSelectDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

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
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the element.
   * Intended for an outside
   * library to capture data.
   */
  @HostBinding('attr.data-analytics')
  @Input()
  analyticsString: string;

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
    this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Select');
    this.renderer.addClass(this.ref.nativeElement, 'sprk-u-Width-100');

    if ((this.ref.nativeElement as HTMLInputElement).value.length > 0) {
      this.ref.nativeElement.classList.add('sprk-b-Input--has-floating-label');
    }
  }
}
