import {
  Directive,
  ElementRef,
  Input,
  HostBinding,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[sprkTextarea]',
})
export class SprkTextareaDirective {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
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

  ngOnInit(): void {
    this.renderer.addClass(this.ref.nativeElement, 'sprk-b-TextArea');
  }
}
