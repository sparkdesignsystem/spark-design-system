import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkAutocompleteInputContainer]',
})
export class SprkAutocompleteInputContainerDirective {
  constructor(public ref: ElementRef) {}

  /**
   * The value supplied will be assigned to the `role` attribute on the
   * component.
   */
  @HostBinding('attr.role')
  @Input()
  role = 'combobox';

  /**
   * The value supplied will be assigned to the
   * `aria-labelledby` attribute on the
   * component.
   */
  @HostBinding('attr.aria-labelledby')
  @Input()
  ariaLabelledby: string;

  /**
   * The value supplied will be assigned to the
   * `aria-haspopup` attribute on the
   * component.
   */
  @HostBinding('attr.aria-haspopup')
  @Input()
  ariaHaspopup = 'listbox';

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

  @HostBinding('class.sprk-b-TextInputIconContainer') inputIconClass = true;
}
