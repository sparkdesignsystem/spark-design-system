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

  /**
   * Expects a space separated string
   * of classes to be added to the
   * element.
   */
  @Input()
  additionalClasses: string;

  /**
   * @ignore
   *
   */
  private _isHighlighted: boolean;

  /**
   * If true, this Autocomplete result will be highlighted.
   */
  @HostBinding('class.sprk-c-Autocomplete__result--active')
  @HostBinding('attr.aria-selected')
  @Input()
  set isHighlighted(value: boolean) {
    /**
     * Normally Spark would put this kind of behavior in ngOnChanges, but
     * that lifecycle event is not triggered when an Input is updated directly
     * from a parent component. This logic is moved into a setter on the Input
     * so that it is triggered when sprk-autocomplete changes this value.
     */
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

        result.parentNode.scrollTop = childTop;
      }
    }
  }
  get isHighlighted() {
    return this._isHighlighted;
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

    let itemId = this.ref.nativeElement.id;
    if (!itemId) {
      itemId = uniqueId(`sprk_autocomplete_result_`);
      this.renderer.setProperty(this.ref.nativeElement, 'id', itemId);
    }

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
