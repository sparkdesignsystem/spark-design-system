import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  Input,
  HostBinding,
} from '@angular/core';
import { uniqueId } from 'lodash';

@Directive({
  selector: '[sprkAutocompleteResult]',
})
export class SprkAutocompleteResultDirective {
  constructor(public ref: ElementRef) {}

  /**
   * The value supplied will be assigned to the `id` attribute on the
   * component. A unique id will be generated if one is not provided.
   */
  @HostBinding('attr.id')
  @Input()
  id = uniqueId(`sprk_autocomplete_result_`);

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

  @HostBinding('class.sprk-c-Autocomplete__result') resultClass = true;

  /**
   * @ignore
   *
   */
  private _isSelected = false;

  /**
   * If true, this Autocomplete result will be highlighted.
   */
  @HostBinding('class.sprk-c-Autocomplete__result--active')
  @HostBinding('attr.aria-selected')
  @Input()
  set isSelected(value: boolean) {
    /**
     * Normally Spark would put this kind of behavior in ngOnChanges, but
     * that lifecycle event is not triggered when an Input is updated directly
     * from a parent component. This logic is moved into a setter on the Input
     * so that it is triggered when sprk-autocomplete changes this value.
     */
    this._isSelected = value;

    if (this._isSelected) {
      const result = this.ref.nativeElement;
      const listItemTop = result.getBoundingClientRect().top;
      const listItemBottom = result.getBoundingClientRect().bottom;

      const listTop = result.parentNode.getBoundingClientRect().top;
      const listBottom = result.parentNode.getBoundingClientRect().bottom;

      // if the list item is not vertically contained within the list
      if (listItemTop < listTop || listItemBottom > listBottom) {
        // the distance from the top of the <li> to the top of the <ul>
        const childTop = result.offsetTop;

        result.parentNode.scrollTop = childTop;
      }
    }
  }
  get isSelected() {
    return this._isSelected;
  }

  /**
   * @ignore
   * Accepts a function to run when an item is clicked.
   * This should be set automatically by sprk-autocomplete and should
   * not be set manually by users.
   */
  @Output()
  clickedEvent = new EventEmitter<any>();

  /**
   * @ignore
   */
  @HostListener('click', ['$event.target'])
  onClick() {
    this.clickedEvent.emit(this.ref.nativeElement.id);
  }
}
