import {
  Component,
  Renderer2,
  EventEmitter,
  Input,
  Output,
  ContentChildren,
  ContentChild,
  HostListener,
  AfterContentInit,
  ElementRef,
  AfterViewInit,
  QueryList,
} from '@angular/core';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result/sprk-autocomplete-result.directive';

@Component({
  selector: 'sprk-autocomplete',
  template: `<ng-content></ng-content>`,
})
export class SprkAutocompleteComponent
  implements AfterContentInit, AfterViewInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  /**
   * @ignore
   */
  @HostListener('document:keydown', ['$event'])
  onKeydown($event) {
    if (
      $event.key === 'Escape' ||
      $event.key === 'Esc' ||
      $event.keyCode === 27
    ) {
      if (this.isOpen) {
        this.isOpen = false;
        this.hideResults();
      }
    }

    if (this.isUpPressed($event)) {
      this.retreatHighlightedItem();
    }

    if (this.isDownPressed($event)) {
      this.advanceHighlightedItem();
    }

    if (this.isEnterPressed($event)) {
      // Only select the list item if the list is open
      // and an item is highlighted
      if (this.isOpen && this.highlightedIndex !== -1) {
        this.selectHighlightedListItem();
      }
    }
  }

  /**
   * @ignore
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event): void {
    if (
      this.ref.nativeElement &&
      !this.ref.nativeElement.contains(event.target) &&
      this.isOpen
    ) {
      this.isOpen = false;
      this.hideResults();
    }
  }

  /**
   * @ignore
   */
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.calculateResultsWidth();
  }

  /**
   * This component expects a child element
   * with the `sprkInput` directive.
   */
  @ContentChild(SprkInputDirective, { static: false })
  input: SprkInputDirective;

  /**
   * This component expects a child element
   * with the `sprkAutocompleteResults` directive.
   */
  @ContentChild(SprkAutocompleteResultsDirective, {
    static: false,
    read: ElementRef,
  })
  results: ElementRef;

  /**
   * This component expects the `sprkAutocompleteResults` child
   * to contain elements with the `sprkAutocompleteResult` directive.
   */
  @ContentChildren(SprkAutocompleteResultDirective, { descendants: true })
  resultItems: QueryList<SprkAutocompleteResultDirective>;

  /**
   * If `true`, the Autocomplete results will be visible when the component loads.
   */
  @Input()
  isOpen = false;

  /**
   * This event will be emitted after the Autocomplete results are opened.
   */
  @Output()
  openedEvent = new EventEmitter<any>();
  /**
   * This event will be emitted after the Autocomplete results are closed.
   */
  @Output()
  closedEvent = new EventEmitter<any>();
  /**
   * This event will be emitted when an Autocomplete result is selected with
   * a click event or with the Enter key. The event contains the id of the
   * selected item.
   */
  @Output()
  itemSelectedEvent = new EventEmitter<any>();

  /**
   * @ignore
   * Highlight the previous item in the Autocomplete results.
   * Used for arrow key functionality.
   */
  retreatHighlightedItem(): void {
    this.removeAllHighlights();

    if (this.highlightedIndex < 0 || this.highlightedIndex - 1 === -1) {
      this.highlightedIndex = this.resultItems.length - 1;
    } else {
      this.highlightedIndex = this.highlightedIndex - 1;
    }

    this.highlightListItem(this.resultItems.toArray()[this.highlightedIndex]);
  }

  /**
   * @ignore
   * Highlight the next item in the Autocomplete results.
   * Used for arrow key functionality.
   */
  advanceHighlightedItem(): void {
    this.removeAllHighlights();

    if (this.highlightedIndex < 0) {
      this.highlightedIndex = 0;
    } else if (this.highlightedIndex + 1 <= this.resultItems.length - 1) {
      this.highlightedIndex = this.highlightedIndex + 1;
    } else {
      this.highlightedIndex = 0;
    }

    this.highlightListItem(this.resultItems.toArray()[this.highlightedIndex]);
  }

  /**
   * @ignore
   * Remove the highlight from all Autocomplete result items.
   */
  removeAllHighlights(): void {
    this.resultItems.forEach((element, index) => {
      element.isHighlighted = false;
    });
  }

  /**
   * Highlight a specific element in the Autocomplete results. If the Enter
   * key is pressed, this element will be selected.
   * @param listItemElement The element to highlight.
   */
  highlightListItem(listItemElement): void {
    listItemElement.isHighlighted = true;

    this.renderer.setAttribute(
      this.input.ref.nativeElement,
      'aria-activedescendant',
      listItemElement.ref.nativeElement.id,
    );
  }

  /**
   * Emit the itemSelectedEvent with the currently-highlighted Autocomplete
   * result item.
   */
  selectHighlightedListItem(): void {
    var selectedElement = this.resultItems.filter(
      (element, index) => element.isHighlighted,
    )[0];
    var selectedId = selectedElement.ref.nativeElement.id;
    this.itemSelectedEvent.emit(selectedId);
  }

  /**
   * Hide the Autocomplete results list.
   */
  hideResults(): void {
    if (this.results) {
      // Remove the hidden style
      this.renderer.addClass(
        this.results.nativeElement,
        'sprk-c-Autocomplete__results--hidden',
      );

      // Set aria-expanded on the input
      this.renderer.setAttribute(
        this.input.ref.nativeElement,
        'aria-expanded',
        'false',
      );

      // Remove aria-activedescendant from the input
      this.renderer.removeAttribute(
        this.input.ref.nativeElement,
        'aria-activedescendant',
      );

      // remove aria-selected and highlight class from all list items
      this.removeAllHighlights();

      this.closedEvent.emit();
    }
  }

  /**
   * Show the Autocomplete results list.
   */
  showResults(): void {
    this.renderer.removeClass(
      this.results.nativeElement,
      'sprk-c-Autocomplete__results--hidden',
    );

    // Set aria-expanded on the input
    this.renderer.setAttribute(
      this.input.ref.nativeElement,
      'aria-expanded',
      'true',
    );

    this.openedEvent.emit();
  }

  /**
   * @ignore
   * Track the index of the currently-highlighted Autocomplete result item.
   */
  highlightedIndex = -1;

  /**
   * @ignore
   */
  ngAfterContentInit(): void {
    if (this.input) {
      this.input.ref.nativeElement.setAttribute('aria-expanded', this.isOpen);
    }

    if (this.results) {
      if (this.isOpen) {
        this.showResults();
      } else {
        this.hideResults();
      }
    }

    // if itemSelectedEvent is specified, also set that as the click event on each result
    if (this.itemSelectedEvent) {
      this.resultItems.forEach((element, index) => {
        element.clickedEvent = this.itemSelectedEvent;
      });
    }
  }

  /**
   * @ignore
   * This logic needs to happen in this event so that the input width is
   * correctly calculated.
   */
  ngAfterViewInit(): void {
    if (this.input) {
      this.calculateResultsWidth();
    }
  }

  /** @ignore */
  isUpPressed = (e) => e.key === 'ArrowRight' || e.keyCode === 38;
  /** @ignore */
  isDownPressed = (e) => e.key === 'ArrowDown' || e.keyCode === 40;
  /** @ignore */
  isEnterPressed = (e) => e.key === 'Enter' || e.keyCode === 13;
  /** @ignore */
  isEscapePressed = (e) =>
    e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;

  /**
   * @ignore
   * Set the max-width on the Autocomplete results equal to the current
   * width of the input element.
   */
  calculateResultsWidth() {
    const currentInputWidth = this.input.ref.nativeElement.offsetWidth;

    this.renderer.setAttribute(
      this.results.nativeElement,
      'style',
      'max-width:' + currentInputWidth + 'px',
    );
  }
}
