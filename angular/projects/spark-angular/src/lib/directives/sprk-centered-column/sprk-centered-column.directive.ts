import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkCenteredColumn]'
})
export class SprkCenteredColumnDirective {

  @HostBinding('class.sprk-o-CenteredColumn') true;

  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}
}
