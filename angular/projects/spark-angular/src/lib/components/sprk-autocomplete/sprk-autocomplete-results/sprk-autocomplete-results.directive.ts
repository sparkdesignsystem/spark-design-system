import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkAutocompleteResults]',
})
export class SprkAutocompleteResultsDirective {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}

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
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the element.
   * Intended for an outside
   * library to capture data.
   */
  @HostBinding('attr.data-analytics')
  @Input()
  analyticsString: string;

  @HostBinding('class.sprk-c-Autocomplete__results') resultsClass = true;
}
