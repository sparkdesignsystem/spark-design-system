import { Directive, Input, HostBinding, ElementRef } from '@angular/core';
import { uniqueId } from 'lodash';
@Directive({
  selector: '[sprkMastheadNavCollapsible]',
})
export class SprkMastheadNavCollapsibleDirective {
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

  /**
   * The value supplied will be assigned to the `id` attribute on the
   * component. This is intended to be used as a hook for the collapsible
   * nav button.
   */
  @HostBinding('attr.id')
  @Input()
  id = uniqueId(`sprk_masthead_nav_collapsible_`);

  /**
   * If `true`, styles will be applied to hide the nav.
   */
  @Input() isCollapsed = true;

  @HostBinding('class.sprk-c-Masthead__nav-collapsible')
  mastheadNavCollapsibleClass = true;

  @HostBinding('class.sprk-c-Masthead__nav-collapsible--is-collapsed')
  get isCollapsedSetting(): boolean {
    console.log(' the input getter ran from collapsible nav directive.');
    return this.isCollapsed;
  }
}
