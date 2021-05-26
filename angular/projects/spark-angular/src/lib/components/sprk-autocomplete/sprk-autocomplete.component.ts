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
import {
  isDownPressed,
  isEnterPressed,
  isEscapePressed,
  isUpPressed,
} from '../../utilities/keypress/keypress';

@Component({
  selector: 'sprk-autocomplete',
  template: `<ng-content></ng-content>`,
})
export class SprkAutocompleteComponent
  implements AfterContentInit, AfterViewInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}
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
   */
  @HostListener('document:keydown', ['$event'])
  onKeydown($event) {
    if (isEscapePressed($event) && this.isOpen) {
      this.hideResults();
    }

    if (isUpPressed($event) && this.isOpen) {
      this.retreatHighlightedItem();
    }

    if (isDownPressed($event) && this.isOpen) {
      this.advanceHighlightedItem();
    }

    // Only select the list item if the list is open
    // and an item is highlighted
    if (isEnterPressed($event) && this.isOpen && this.highlightedIndex !== -1) {
      this.selectHighlightedListItem();
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
      element.isSelected = false;
    });
  }

  /**
   * Highlight a specific element in the Autocomplete results. If the Enter
   * key is pressed, the itemSelectedEvent will be emitted with this
   * element's id.
   * @param listItemElement The element to highlight.
   */
  highlightListItem(listItemElement): void {
    if (listItemElement) {
      listItemElement.isSelected = true;

      // set aria-activedescendant on the input to the id of the
      // highlighted item
      if (this.input) {
        this.renderer.setAttribute(
          this.input.ref.nativeElement,
          'aria-activedescendant',
          listItemElement.ref.nativeElement.id,
        );
      }
    }
  }

  /**
   * Emit the itemSelectedEvent with the currently-highlighted Autocomplete
   * result item.
   */
  selectHighlightedListItem(): void {
    let selectedElement = this.resultItems.filter(
      (element) => element.isSelected,
    )[0];
    let selectedId = selectedElement.ref.nativeElement.id;
    this.itemSelectedEvent.emit(selectedId);
  }

  /**
   * Hide the Autocomplete results list.
   */
  hideResults(): void {
    if (!this.results) {
      return;
    }

    // Add the hidden style
    this.renderer.addClass(
      this.results.nativeElement,
      'sprk-c-Autocomplete__results--hidden',
    );

    if (this.input) {
      // Set aria-expanded on the input's parent
      this.renderer.setAttribute(
        this.input.ref.nativeElement.parentNode,
        'aria-expanded',
        'false',
      );

      // Remove aria-activedescendant from the input
      this.renderer.removeAttribute(
        this.input.ref.nativeElement,
        'aria-activedescendant',
      );
    }

    // remove aria-selected and highlight class from all list items
    this.removeAllHighlights();

    this.closedEvent.emit();
    this.isOpen = false;
  }

  /**
   * Show the Autocomplete results list.
   */
  showResults(): void {
    if (!this.results) {
      return;
    }

    this.renderer.removeClass(
      this.results.nativeElement,
      'sprk-c-Autocomplete__results--hidden',
    );

    if (this.input) {
      // Set aria-expanded on the input's parent
      this.renderer.setAttribute(
        this.input.ref.nativeElement.parentNode,
        'aria-expanded',
        'true',
      );
    }

    this.openedEvent.emit();
    this.isOpen = true;
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
    if (this.results) {
      if (this.isOpen) {
        this.showResults();
      } else {
        this.hideResults();
      }
    }

    // if itemSelectedEvent is specified, also set that as the click event on each result
    if (this.itemSelectedEvent) {
      this.resultItems.forEach((element) => {
        element.clickedEvent = this.itemSelectedEvent;
      });
    }
  }

  /**
   * @ignore
   * This logic needs to happen in this event so that the correct DOM
   * attributes will have been set.
   */
  ngAfterViewInit(): void {
    if (!this.input || !this.results) {
      return;
    }

    this.calculateResultsWidth();

    // set aria-controls on the input to the id of the results
    this.generateAriaControls(
      this.input.ref.nativeElement,
      this.results.nativeElement,
    );

    // set aria-owns on the input's parent to the id of the results
    this.generateAriaOwns(
      this.input.ref.nativeElement.parentNode,
      this.results.nativeElement,
    );
  }

  /**
   * @ignore
   * Set the max-width on the Autocomplete results equal to the current
   * width of the input element.
   */
  calculateResultsWidth() {
    if (!this.input || !this.results) {
      return;
    }

    const currentInputWidth = this.input.ref.nativeElement.offsetWidth;

    this.renderer.setAttribute(
      this.results.nativeElement,
      'style',
      'max-width:' + currentInputWidth + 'px',
    );
  }

  /**
   * @ignore
   * Copy the value of the id attribute on contentElement
   * into the aria-controls attribute on triggerElement.
   * Generate a unique ID if needed.
   * @param triggerElement The element that will receive the aria-controls attribute.
   * @param contentElement The element that will receive an id if needed.
   */
  generateAriaControls = (triggerElement, contentElement) => {
    const triggerAriaControls = triggerElement.getAttribute('aria-controls');
    const contentId = contentElement.getAttribute('id');

    // Do nothing if aria-controls exists but the id does not
    if (triggerAriaControls && !contentId) {
      return;
    }

    // Do nothing if aria-controls and id both exist but don't match
    if (contentId && triggerAriaControls && contentId !== triggerAriaControls) {
      return;
    }

    // set the value of aria-controls
    triggerElement.setAttribute('aria-controls', contentId);
  };

  /**
   * @ignore
   * Copy the value of the id attribute on contentElement
   * into the aria-owns attribute on ownerElement.
   * Generate a unique ID if needed.
   * @param ownerElement The element that will receive the aria-owns attribute.
   * @param contentElement The element that will receive an id if needed.
   */
  generateAriaOwns = (ownerElement, contentElement) => {
    const ownerAriaOwns = ownerElement.getAttribute('aria-owns');
    const contentId = contentElement.getAttribute('id');

    // Do nothing if aria-owns exists but the id does not
    if (ownerAriaOwns && !contentId) {
      return;
    }

    // Do nothing if aria-owns and id both exist but don't match
    if (contentId && ownerAriaOwns && contentId !== ownerAriaOwns) {
      return;
    }

    // set the value of aria-owns
    ownerElement.setAttribute('aria-owns', contentId);
  };
}
