import {
  Directive,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[sprkHeading]'
})

export class SprkHeadingDirective {
  /**
   * @ignore
   */
  constructor() { }

  @Input()
  variant: 'displayOne' |
    'displayTwo' | 'displayThree' |
    'displayFour' | 'displayFive' |
    'displaySix' | 'displaySeven';

  @HostBinding('class.sprk-b-TypeDisplayOne')
  get headingOne() {
    return this.variant === 'displayOne';
  }
  @HostBinding('class.sprk-b-TypeDisplayTwo')
  get headingTwo() {
    return this.variant === 'displayTwo';
  }
  @HostBinding('class.sprk-b-TypeDisplayThree')
  get headingThree() {
    return this.variant === 'displayThree';
  }
  @HostBinding('class.sprk-b-TypeDisplayFour')
  get headingFour() {
    return this.variant === 'displayFour';
  }
  @HostBinding('class.sprk-b-TypeDisplayFive')
  get headingFive() {
    return this.variant === 'displayFive';
  }
  @HostBinding('class.sprk-b-TypeDisplaySix')
  get headingSix() {
    return this.variant === 'displaySix';
  }
  @HostBinding('class.sprk-b-TypeDisplaySeven')
  get headingSeven() {
    return this.variant === 'displaySeven';
  }

  @HostBinding('class.sprk-b-PageTitle')
  /**
   * Value will be used to select
   * the heading style.
   */
  @Input() isPageTitle = false;
}
