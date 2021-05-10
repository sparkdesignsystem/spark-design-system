import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprkMastheadNavItems]',
})
export class SprkMastheadNavItemsDirective {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}

  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated
   * tools. This value should be unique per page.
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

  @HostBinding('class.sprk-c-Masthead__little-nav')
  mastheadNavItemsClass = true;
}
