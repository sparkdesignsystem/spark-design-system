import {
  Directive,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[sprkLink]',
})
export class SprkLinkDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  /**
   * Will cause the appropriate variant type to render.
   * If omitted, the default Spark Link class is applied.
   * The 'icon' variant is deprecated and will be removed
   * in the next release. Use 'hasIcon' instead.
   */
  // TODO: Remove 'icon' in issue #1293
  @Input() variant:
    | 'simple'
    | 'icon'
    | 'hasIcon'
    | 'unstyled'
    | 'plain'
    | 'light';

  /**
   * If `true`, will set disabled styles on the link.
   */
  @HostBinding('class.sprk-b-Link--disabled')
  @Input()
  isDisabled: boolean;
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

  ngOnInit() {
    // TODO: Remove 'icon' in issue #1293
    const variants = {
      simple: 'sprk-b-Link--simple',
      icon: 'sprk-b-Link--has-icon',
      hasIcon: 'sprk-b-Link--has-icon',
      plain: 'sprk-b-Link--plain',
      light: 'sprk-b-Link--light',
    };
    if (this.variant !== 'unstyled') {
      this.renderer.addClass(this.el.nativeElement, 'sprk-b-Link');
    }
    if (variants.hasOwnProperty(this.variant)) {
      this.renderer.addClass(this.el.nativeElement, variants[this.variant]);
    }
  }
}
