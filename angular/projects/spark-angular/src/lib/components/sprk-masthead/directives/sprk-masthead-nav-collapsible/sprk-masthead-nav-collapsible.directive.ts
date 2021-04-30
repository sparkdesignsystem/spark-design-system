import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkMastheadNavCollapsible]',
})
export class SprkMastheadNavCollapsibleDirective {
  /**
   * @ignore
   */
  constructor() {}

  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated
   * tools. This value should be unique per page.
   */
  @HostBinding('attr.data-id')
  @Input()
  idString: string;

  @HostBinding('class.sprk-c-Masthead__narrow-nav') true: string;
}
