import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkDivider]',
})
export class SprkDividerDirective {
  @HostBinding('class.sprk-c-Divider') dividerClass = true;

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
}
