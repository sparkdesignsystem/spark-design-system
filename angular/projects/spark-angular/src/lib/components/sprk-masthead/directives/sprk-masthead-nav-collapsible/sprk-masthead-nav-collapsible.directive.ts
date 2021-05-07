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
   * The value supplied will be assigned to the `id` attribute on the
   * component. This is intended to be used as a hook for the collapsible
   * nav button.
   */
  @HostBinding('attr.id')
  @Input()
  id = uniqueId(`sprk_masthead_collapsible_nav_`);

  /**
   * If `true`, styles will be applied to hide the nav.
   */
  @Input()
  isCollapsed = true;

  @HostBinding('class.sprk-c-Masthead__collapsible-nav--is-collapsed')
  get collapsedInput() {
    console.log(this.isCollapsed, 'is collapse from directive');
    return this.isCollapsed;
  }

  @HostBinding('class.sprk-c-Masthead__collapsible-nav')
  mastheadNavCollapsibleClass = true;
}
