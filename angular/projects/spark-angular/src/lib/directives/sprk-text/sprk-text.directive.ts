import {
  Directive,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[sprkText]'
})

export class SprkTextDirective {
  /**
   * @ignore
   */
  constructor() { }

  @Input()
  variant: 'bodyOne' |
    'bodyTwo' | 'bodyThree' |
    'bodyFour';

  @HostBinding('class.sprk-b-TypeBodyOne')
  get textOne() {
    return this.variant === 'bodyOne';
  }
  @HostBinding('class.sprk-b-TypeBodyTwo')
  get textTwo() {
    return this.variant === 'bodyTwo';
  }
  @HostBinding('class.sprk-b-TypeBodyThree')
  get textThree() {
    return this.variant === 'bodyThree';
  }
  @HostBinding('class.sprk-b-TypeBodyFour')
  get textFour() {
    return this.variant === 'bodyFour';
  }
}


