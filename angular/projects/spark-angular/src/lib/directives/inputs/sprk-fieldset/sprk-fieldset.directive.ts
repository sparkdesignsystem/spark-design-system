import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sprkFieldset]',
})
export class SprkFieldsetDirective {
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside
   * libraries to capture data.
   */
  @Input()
  analyticsString: string;

  @HostBinding('attr.data-id')
  get idStr() {
    return this.idString;
  }

  @HostBinding('class.sprk-b-Fieldset') selectClass = true;

  @HostBinding('attr.data-analytics')
  get analyticsStr() {
    return this.analyticsString;
  }
}
