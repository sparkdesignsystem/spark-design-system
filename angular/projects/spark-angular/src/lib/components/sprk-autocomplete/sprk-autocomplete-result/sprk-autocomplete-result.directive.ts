import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  Input,
  HostBinding,
  Renderer2,
} from '@angular/core';
import { uniqueId } from 'lodash';

@Directive({
  selector: '[sprkAutocompleteResult]',
})
export class SprkAutocompleteResultDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

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

  private _isHighlighted: boolean;
  @HostBinding('class.sprk-c-Autocomplete__result--active')
  @HostBinding('attr.aria-selected')
  @Input()
  set isHighlighted(value: boolean) {
    this._isHighlighted = value;

    if (this._isHighlighted) {
      var result = this.ref.nativeElement;
      const listItemTop = result.getBoundingClientRect().top;
      const listItemBottom = result.getBoundingClientRect().bottom;

      const listTop = result.parentNode.getBoundingClientRect().top;
      const listBottom = result.parentNode.getBoundingClientRect().bottom;

      // if the list item is not vertically contained within the list
      if (listItemTop < listTop || listItemBottom > listBottom) {
        // the distance from the top of the <li> to the top of the <ul>
        const childTop = result.offsetTop;

        // eslint-disable-next-line no-param-reassign
        result.parentNode.scrollTop = childTop;
      }
    }
  }
  get isHighlighted() {
    return this._isHighlighted;
  }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.itemSelectedEvent.emit(this.ref.nativeElement.id);
  }

  /**
   * Accepts a function to run when asdf
   */
  @Output()
  itemSelectedEvent = new EventEmitter<any>();

  /**
   * Expects a space separated string
   * of classes to be added to the
   * element.
   */
  @Input()
  additionalClasses: string;

  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-c-Autocomplete__result'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((item) => {
      this.renderer.addClass(this.ref.nativeElement, item);
    });

    // TODO generate an ID
    let itemId = this.ref.nativeElement.id;
    if (!itemId) {
      itemId = uniqueId(`sprk_autocomplete_result_`);
      this.renderer.setProperty(this.ref.nativeElement, 'id', itemId);
    }

    this.renderer.setAttribute(this.ref.nativeElement, 'role', 'option');

    if (this.analyticsString) {
      this.renderer.setAttribute(
        this.ref.nativeElement,
        'data-analytics',
        this.analyticsString,
      );
    }

    if (this.idString) {
      this.renderer.setAttribute(
        this.ref.nativeElement,
        'data-id',
        this.idString,
      );
    }
  }
}
