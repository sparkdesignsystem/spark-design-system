import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkBox]',
})
export class SprkBoxDirective {
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
  /**
   * Padding inside of the box component.
   * Defaults to medium sizing when not provided.
   * Refer to Class Modifiers section for default pixel values.
   */
  @Input() spacing:
    | 'flush'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'huge'
    | 'insetShortTiny'
    | 'insetShortSmall'
    | 'insetShortMedium'
    | 'insetShortLarge'
    | 'insetShortHuge'
    | 'insetTallTiny'
    | 'insetTallSmall'
    | 'insetTallMedium'
    | 'insetTallLarge'
    | 'insetTallHuge'
    | 'miscA'
    | 'miscB'
    | 'miscC'
    | 'miscD';

  @HostBinding('class.sprk-o-Box') boxClass = true;

  @HostBinding('class.sprk-o-Box--flush')
  get flush() {
    return this.spacing === 'flush';
  }

  @HostBinding('class.sprk-o-Box--tiny')
  get tiny() {
    return this.spacing === 'tiny';
  }

  @HostBinding('class.sprk-o-Box--small')
  get small() {
    return this.spacing === 'small';
  }

  @HostBinding('class.sprk-o-Box--medium')
  get medium() {
    return this.spacing === 'medium';
  }

  @HostBinding('class.sprk-o-Box--large')
  get large() {
    return this.spacing === 'large';
  }

  @HostBinding('class.sprk-o-Box--huge')
  get huge() {
    return this.spacing === 'huge';
  }

  @HostBinding('class.sprk-o-Box--inset-short-tiny')
  get insetShortTiny() {
    return this.spacing === 'insetShortTiny';
  }

  @HostBinding('class.sprk-o-Box--inset-short-small')
  get insetShortSmall() {
    return this.spacing === 'insetShortSmall';
  }

  @HostBinding('class.sprk-o-Box--inset-short-medium')
  get insetShortMedium() {
    return this.spacing === 'insetShortMedium';
  }

  @HostBinding('class.sprk-o-Box--inset-short-large')
  get insetShortLarge() {
    return this.spacing === 'insetShortLarge';
  }

  @HostBinding('class.sprk-o-Box--inset-short-huge')
  get insetShortHuge() {
    return this.spacing === 'insetShortHuge';
  }

  @HostBinding('class.sprk-o-Box--inset-tall-tiny')
  get insetTallTiny() {
    return this.spacing === 'insetTallTiny';
  }

  @HostBinding('class.sprk-o-Box--inset-tall-small')
  get insetTallSmall() {
    return this.spacing === 'insetTallSmall';
  }

  @HostBinding('class.sprk-o-Box--inset-tall-medium')
  get insetTallMedium() {
    return this.spacing === 'insetTallMedium';
  }

  @HostBinding('class.sprk-o-Box--inset-tall-large')
  get insetTallLarge() {
    return this.spacing === 'insetTallLarge';
  }

  @HostBinding('class.sprk-o-Box--inset-tall-huge')
  get insetTallHuge() {
    return this.spacing === 'insetTallHuge';
  }

  @HostBinding('class.sprk-o-Box--misc-a')
  get miscA() {
    return this.spacing === 'miscA';
  }

  @HostBinding('class.sprk-o-Box--misc-b')
  get miscB() {
    return this.spacing === 'miscB';
  }

  @HostBinding('class.sprk-o-Box--misc-c')
  get miscC() {
    return this.spacing === 'miscC';
  }

  @HostBinding('class.sprk-o-Box--misc-d')
  get miscD() {
    return this.spacing === 'miscD';
  }

  /**
   * @ignore
   */
  constructor() {}
}
