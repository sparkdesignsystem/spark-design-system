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
  variant: 'one' |
    'two' | 'three' |
    'four';

  @HostBinding('class.sprk-b-TypeBodyOne')
  get headingOne() {
    return this.variant === 'one';
  }
  @HostBinding('class.sprk-b-TypeBodyTwo')
  get headingTwo() {
    return this.variant === 'two';
  }
  @HostBinding('class.sprk-b-TypeBodyThree')
  get headingThree() {
    return this.variant === 'three';
  }
  @HostBinding('class.sprk-b-TypeBodyFour')
  get headingFour() {
    return this.variant === 'four';
  }
}


