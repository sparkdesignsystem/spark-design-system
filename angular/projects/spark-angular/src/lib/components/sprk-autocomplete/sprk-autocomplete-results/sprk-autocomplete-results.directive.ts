import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  HostBinding,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[sprkAutocompleteResults]',
})
export class SprkAutocompleteResultsDirective implements OnInit {
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
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-c-Autocomplete__results'];

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((item) => {
      this.renderer.addClass(this.ref.nativeElement, item);
    });

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
