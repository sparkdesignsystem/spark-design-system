import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input,
  HostBinding,
  Renderer2,
} from '@angular/core';

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

    // TODO generate an ID?

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
