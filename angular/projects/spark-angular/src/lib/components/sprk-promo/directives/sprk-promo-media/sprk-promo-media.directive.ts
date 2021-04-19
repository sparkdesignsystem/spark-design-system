import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkPromoMedia]',
})
export class SprkPromoMediaDirective {
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
   * If `true`, will apply Promo flag styles.
   */
  @HostBinding('class.sprk-c-Promo__image--flag')
  @Input()
  isFlag: string;

  @HostBinding('class.sprk-c-Promo__image') true;

  /**
   * @ignore
   */
  constructor() {}
}
