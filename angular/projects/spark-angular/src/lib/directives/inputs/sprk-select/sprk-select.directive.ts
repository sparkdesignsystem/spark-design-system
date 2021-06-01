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

  /**
   * If set to `huge`, then
   * the huge styles will be applied
   * to the input.
   */
  @Input()
  variant: 'huge' | undefined;

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
   * Add the floating label class if the element
   * has a value.
   * @param element the nativeElement
   */
  floatLabelWhenValue(element: HTMLSelectElement) {
    const value = (element as HTMLSelectElement).value;
    value.length > 0
      ? this.renderer.addClass(element, 'sprk-b-Input--has-floating-label')
      : this.renderer.removeClass(element, 'sprk-b-Input--has-floating-label');
  }

  /**
   * @ignore
   */
  @HostListener('change', ['$event'])
  OnChange() {
    if (this.variant === 'huge') {
      this.floatLabelWhenValue(this.ref.nativeElement);
    }
  }

  ngOnInit(): void {
    this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Select');

    if (this.variant === 'huge') {
      this.floatLabelWhenValue(this.ref.nativeElement);
    }
  }
}
