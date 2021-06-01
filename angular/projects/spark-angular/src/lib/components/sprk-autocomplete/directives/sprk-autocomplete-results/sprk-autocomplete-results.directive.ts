import { Directive, ElementRef, Input, HostBinding } from '@angular/core';
import { uniqueId } from 'lodash';

@Directive({
  selector: '[sprkAutocompleteResults]',
})
export class SprkAutocompleteResultsDirective {
  constructor(public ref: ElementRef) {}

  /**
   * The value supplied will be assigned to the `id` attribute on the
   * component. A unique id will be generated if one is not provided.
   */
  @HostBinding('attr.id')
  @Input()
  id = uniqueId(`sprk_autocomplete_results_`);

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
