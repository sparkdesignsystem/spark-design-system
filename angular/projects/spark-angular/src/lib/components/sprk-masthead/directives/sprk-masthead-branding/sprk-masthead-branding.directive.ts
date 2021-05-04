import {
  Directive,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[sprkMastheadBranding]',
})
export class SprkMastheadBrandingDirective {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated
   * tools. This value should be unique per page.
   */
  @HostBinding('attr.data-id')
  @Input()
  idString: string;

  @HostBinding('class.sprk-c-Masthead__branding') true: string;
}
