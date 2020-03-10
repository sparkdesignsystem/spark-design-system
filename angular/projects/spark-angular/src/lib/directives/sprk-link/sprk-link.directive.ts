import {
  Directive,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[sprkLink]'
})
export class SprkLinkDirective {
  /**
   * @ignore
   */
  constructor() { }
  /**
   * Will cause the appropriate variant type to render.
   * If omitted, the default Spark Link class is applied.
   */
  @Input() variant:
    | 'simple'
    | 'icon'
    | 'unstyled'
    | 'plain';

  @HostBinding('class.sprk-b-Link')
  get link() {
    return this.variant !== 'unstyled';
  }

  @HostBinding('class.sprk-b-Link--simple')
  get simple() {
    return this.variant === 'simple';
  }

  @HostBinding('class.sprk-b-Link-simple')
  @HostBinding('class.sprk-b-Link--has-icon')
  get icon() {
    return this.variant === 'icon';
  }

  @HostBinding('class.sprk-b-Link--plain')
  get plain() {
    return this.variant === 'plain';
  }
  /**
   * If `true`, will set disabled styles on the link.
   */
  @HostBinding('class.sprk-b-Link--disabled')
  @Input() isDisabled: boolean;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the element.
   * Intended for an outside
   * library to capture data.
   */
  @HostBinding('attr.data-analytics')
  @Input() analyticsString: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @HostBinding('attr.data-id')
  @Input() idString: string;
}
