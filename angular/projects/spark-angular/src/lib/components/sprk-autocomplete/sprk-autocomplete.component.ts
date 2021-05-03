import {
  Component,
  Renderer2,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ContentChild,
  HostListener,
  AfterContentInit,
  ElementRef,
} from '@angular/core';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results/sprk-autocomplete-results.directive';

@Component({
  selector: 'sprk-autocomplete',
  template: `<ng-content></ng-content>`,
})
export class SprkAutocompleteComponent implements AfterContentInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  // TODO calculate and set max-width on page load and on window resize
  // const calculateListWidth = (listEl, inputEl) => {
  //   const currentInputWidth = inputEl.offsetWidth;
  //   listEl.setAttribute('style', `max-width:${currentInputWidth}px`);
  // };

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

    // if up arrow
    // if down arrow
    // Enter
    // Tab?
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
   * docs docs docs
   */
  hideResults(): void {
    console.log('hiding');
    this.renderer.addClass(this.results.nativeElement, 'sprk-u-Display--none');
    // set aria-expanded to false
    // remove activedescendant frm input
    // remove aria-selected and highlight class from all list items
    // emit something
  }

  /**
   * docs docs docs
   */
  showResults(): void {
    this.renderer.removeClass(
      this.results.nativeElement,
      'sprk-u-Display--none',
    );
    // set aria-expanded to true
    // emit something
  }

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
          'sprk-u-Display--none',
        );
      } else {
        this.renderer.addClass(
          this.results.nativeElement,
          'sprk-u-Display--none',
        );
      }
    }
  }
}
