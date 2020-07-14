import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sprkLegend]',
})
export class SprkLegendDirective {
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
   * This will be used to add disabled styles to the
   * legend.
   */
  @Input() isDisabled: boolean;

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

  @HostBinding('class.sprk-b-Legend') legendClass = true;
  @HostBinding('class.sprk-b-Label') textClass = true;
  @HostBinding('class.sprk-b-Label--disabled')
  get disabled() {
    return this.isDisabled;
  }
  @HostBinding('attr.data-analytics')
  get analyticsStr() {
    return this.analyticsString;
  }
}
