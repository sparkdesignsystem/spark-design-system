import {
  Directive,
  Input,
  HostBinding,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[sprkMastheadLink]',
})
export class SprkMastheadLinkDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated
   * tools. This value should be unique per page.
   */
  @HostBinding('attr.data-id')
  @Input()
  idString: string;

  /**
   * Will cause the appropriate variant type to render.
   * If omitted, the default Masthead Link classes are applied.
   */
  @Input() variant: 'navBar';

  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the element.
   * Intended for an outside
   * library to capture data.
   */
  @HostBinding('attr.data-analytics')
  @Input()
  analyticsString: string;

  @HostBinding('class.sprk-c-Masthead__link') mastheadLinkClass = true;
  @HostBinding('class.sprk-b-Link') defaultLinkClass = true;
  @HostBinding('class.sprk-b-Link--simple') simpleLinkClass = true;

  ngOnInit(): void {
    if (this.variant === 'navBar') {
      this.renderer.addClass(
        this.ref.nativeElement,
        'sprk-c-Masthead__link--big-nav',
      );
    }
  }
}
