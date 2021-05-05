import {
  Component,
  Renderer2,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ContentChildren,
  ContentChild,
  HostListener,
  AfterContentInit,
  ElementRef,
  QueryList,
} from '@angular/core';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result/sprk-autocomplete-result.directive';

@Component({
  selector: 'sprk-autocomplete',
  template: `<ng-content></ng-content>`,
})
export class SprkAutocompleteComponent implements AfterContentInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  // todo put these somewhere else
  isUpPressed = (e) => e.key === 'ArrowRight' || e.keyCode === 38;
  isDownPressed = (e) => e.key === 'ArrowDown' || e.keyCode === 40;
  isEnterPressed = (e) => e.key === 'Enter' || e.keyCode === 13;

  calculateListWidth() {
    const currentInputWidth = this.input.ref.nativeElement.offsetWidth;

    this.renderer.setAttribute(
      this.results.nativeElement,
      'style',
      'max-width:' + currentInputWidth + 'px',
    );
  }

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
        this.selectListItem();
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
    this.calculateListWidth();
  }

  /**
   * This component expects a child input element
   * with the `sprkInput` directive.
   */
  @ContentChild(SprkInputDirective, { static: false })
  input: SprkInputDirective;

  /**
   * This component expects asdf
   */
  @ContentChild(SprkAutocompleteResultsDirective, {
    static: false,
    read: ElementRef,
  })
  results: ElementRef;

  /**
   * This component expects asdf.
   */
  @ContentChildren(SprkAutocompleteResultDirective, { descendants: true })
  resultItems: QueryList<SprkAutocompleteResultDirective>;

  retreatHighlightedItem(): void {
    this.resetListItems();

    if (this.highlightedIndex < 0 || this.highlightedIndex - 1 === -1) {
      this.highlightedIndex = this.resultItems.length - 1;
    } else {
      this.highlightedIndex = this.highlightedIndex - 1;
    }

    this.highlightListItem(this.resultItems.toArray()[this.highlightedIndex]);
  }

  advanceHighlightedItem(): void {
    this.resetListItems();

    if (this.highlightedIndex < 0) {
      this.highlightedIndex = 0;
    } else if (this.highlightedIndex + 1 <= this.resultItems.length - 1) {
      this.highlightedIndex = this.highlightedIndex + 1;
    } else {
      this.highlightedIndex = 0;
    }

    this.highlightListItem(this.resultItems.toArray()[this.highlightedIndex]);
  }

  resetListItems(): void {
    this.resultItems.forEach((element, index) => {
      element.isHighlighted = false;
    });
  }

  highlightListItem(element): void {
    element.isHighlighted = true;

    this.renderer.setAttribute(
      this.input.ref.nativeElement,
      'aria-activedescendant',
      element.ref.nativeElement.id,
    );
  }

  selectListItem(): void {
    var selectedElement = this.resultItems.filter(
      (element, index) => element.isHighlighted,
    )[0];
    var selectedId = selectedElement.ref.nativeElement.id;
    this.itemSelectedEvent.emit(selectedId);
  }

  /**
   * docs docs docs
   */
  hideResults(): void {
    if (this.results) {
      this.renderer.addClass(
        this.results.nativeElement,
        'sprk-c-Autocomplete__results--hidden', // todo use a new class scoped to the component
      );
      // set aria-expanded to false
      // remove activedescendant frm input
      // remove aria-selected and highlight class from all list items
      this.closedEvent.emit();
    }
  }

  /**
   * docs docs docs
   */
  showResults(): void {
    this.renderer.removeClass(
      this.results.nativeElement,
      'sprk-c-Autocomplete__results--hidden',
    );
    // set aria-expanded to true
    this.openedEvent.emit();
  }

  highlightedIndex = -1;

  /**
   * If `true`, the TODO
   */
  @Input()
  isOpen = false;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string; // TODO where does this go and do we need more?

  /**
   * Accepts a function to run when asdf
   */
  @Output()
  openedEvent = new EventEmitter<any>();
  /**
   * Accepts a function to run when asdf
   */
  @Output()
  closedEvent = new EventEmitter<any>();
  /**
   * Accepts a function to run when asdf
   */
  @Output()
  itemSelectedEvent = new EventEmitter<any>();

  /**
   * @ignore
   */
  ngAfterContentInit(): void {
    if (this.input) {
      this.input.ref.nativeElement.setAttribute('aria-expanded', this.isOpen);
    }

    if (this.results) {
      if (this.isOpen) {
        this.renderer.removeClass(
          this.results.nativeElement,
          'sprk-c-Autocomplete__results--hidden',
        );
      } else {
        this.renderer.addClass(
          this.results.nativeElement,
          'sprk-c-Autocomplete__results--hidden',
        );
      }
    }

    // if I have an itemSelectedEvent, also set that as the click event on each result
    if (this.itemSelectedEvent) {
      this.resultItems.forEach((element, index) => {
        element.itemSelectedEvent = this.itemSelectedEvent;
      });
    }

    this.calculateListWidth();
  }
}
