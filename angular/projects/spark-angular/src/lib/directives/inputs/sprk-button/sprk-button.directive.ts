import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  HostBinding,
  OnChanges,
  Renderer2,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[sprkButton]',
})
export class SprkButtonDirective implements OnInit, OnChanges, AfterViewInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

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
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

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
    if (this.variant === 'secondary') {
      this.renderer.addClass(
        this.ref.nativeElement,
        'sprk-c-Button--secondary',
      );
    }
    if (this.variant === 'tertiary') {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-c-Button--tertiary');
    }
  }

  /**
   * Add spinner only after view has loaded.
   * This is to allow time for the text
   * content of the button to load so that
   * the width value accounts for that text.
   */
  ngAfterViewInit() {
    if (this.isSpinning) {
      this.setSpinning(this.ref.nativeElement);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.isSpinning && !changes['isSpinning'].isFirstChange()) {
      this.setSpinning(this.ref.nativeElement);
    }
  }

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
      spinnerClass += ' sprk-c-Spinner--dark';
    }
    this.renderer.setAttribute(el, 'data-sprk-spinner-text', el.textContent);
    this.renderer.setAttribute(el, 'aria-label', ariaLabel);
    el.innerHTML = `<div class="${spinnerClass}"></div>`;
    el.setAttribute('data-sprk-has-spinner', 'true');
    this.renderer.setAttribute(el, 'data-sprk-has-spinner', 'true');
    this.renderer.setAttribute(el, 'style', `width: ${width}px`);
  };
}
