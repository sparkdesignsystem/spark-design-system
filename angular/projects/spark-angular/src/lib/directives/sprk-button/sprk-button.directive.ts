import {
  Directive,
  ContentChild,
  ElementRef,
  OnInit,
  Input,
  HostBinding,
  OnChanges,
  Renderer2,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
import { SprkSpinnerDirective } from '../sprk-spinner/sprk-spinner.directive';

@Directive({
  selector: '[sprkButton]',
})
export class SprkButtonDirective implements OnInit, OnChanges, AfterViewInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

  // TODO: Remove this contentChild for newSpinner. It was for deprecation purposes only #3561
  @ContentChild(SprkSpinnerDirective, { static: true })
  newSpinner: SprkSpinnerDirective;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * element.
   */
  @Input()
  additionalClasses: string;

  /**
   * Will show a spinner inside the
   * button if set to `true`.
   */
  @Input() isSpinning = false;

  /**
   * Optional string value that is
   * set for the `aria-label`
   * when `isSpinning` is `true`.
   */
  @Input() spinningAriaLabel = 'Loading';

  /**
   *  Determines the corresponding button style.
   */
  @Input() variant: 'primary' | 'secondary' | 'tertiary';

  // Always set the button class on the element
  @HostBinding('class.sprk-c-Button') true;

  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
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

  ngOnInit(): void {
    const variants = {
      secondary: 'sprk-c-Button--secondary',
      tertiary: 'sprk-c-Button--tertiary',
    };
    if (variants.hasOwnProperty(this.variant)) {
      this.renderer.addClass(this.ref.nativeElement, variants[this.variant]);
    }

    const buttonElement = this.ref.nativeElement;

    if (this.isSpinning) {
      this.renderer.addClass(buttonElement, 'sprk-c-Button--has-spinner');
    }

    // TODO: Remove this check for newSpinner. It was for deprecation purposes only #3561
    if (this.isSpinning && this.newSpinner) {
      this.renderer.setAttribute(buttonElement, 'disabled', 'true');
      this.renderer.setAttribute(buttonElement, 'aria-live', 'polite');
      this.renderer.setAttribute(
        buttonElement,
        'aria-label',
        this.spinningAriaLabel,
      );
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        this.renderer.addClass(buttonElement, className);
      });
    }
  }

  // TODO: Remove spinning functionality from button on next release #3561
  /**
   * Add spinner only after view has loaded.
   * This is to allow time for the text
   * content of the button to load so that
   * the width value accounts for that text.
   */
  ngAfterViewInit() {
    // TODO: Remove this check for newSpinner. It was for deprecation purposes only #3561
    if (this.isSpinning && this.newSpinner === undefined) {
      this.setSpinning(this.ref.nativeElement);
    }
  }

  // TODO: Remove this check for newSpinner. It was for deprecation purposes only #3561
  ngOnChanges(changes: SimpleChanges) {
    if (
      this.isSpinning &&
      !changes['isSpinning'].isFirstChange() &&
      this.newSpinner === undefined
    ) {
      this.setSpinning(this.ref.nativeElement);
    }
  }

  // TODO: Remove spinning functionality from button on next release #3561
  /**
   * @ignore
   */
  setSpinning = (element) => {
    const el = element;
    const width = element.offsetWidth;
    const ariaLabel = this.spinningAriaLabel;
    let spinnerClass = 'sprk-c-Spinner sprk-c-Spinner--circle';
    if (
      el.classList.contains('sprk-c-Button--secondary') ||
      this.variant === 'secondary'
    ) {
      spinnerClass += ' sprk-c-Spinner--primary';
    }
    if (
      el.classList.contains('sprk-c-Button--tertiary') ||
      this.variant === 'tertiary'
    ) {
      spinnerClass += ' sprk-c-Spinner--secondary';
    }
    this.renderer.setAttribute(el, 'data-sprk-spinner-text', el.textContent);
    this.renderer.setAttribute(el, 'aria-label', ariaLabel);
    el.innerHTML = `<div class="${spinnerClass}"></div>`;
    el.setAttribute('data-sprk-has-spinner', 'true');
    this.renderer.setAttribute(el, 'data-sprk-has-spinner', 'true');
    this.renderer.setAttribute(el, 'style', `width: ${width}px`);
  };
}
