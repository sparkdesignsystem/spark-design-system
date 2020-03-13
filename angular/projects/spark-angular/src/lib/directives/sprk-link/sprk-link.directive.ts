import {
  Directive,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[sprkLink]'
})
export class SprkLinkDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  /**
   * Will cause the appropriate variant type to render.
   * If omitted, the default Spark Link class is applied.
   */
  @Input() variant:
    | 'simple'
    | 'icon'
    | 'unstyled'
    | 'plain';

  /**
   * If `true`, will set disabled styles on the link.
   */
  @HostBinding('class.sprk-b-Link--disabled')
  @Input() isDisabled: boolean;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the element.
   * Intended for an outside
   * library to capture data.
   */
  @HostBinding('attr.data-analytics')
  @Input() analyticsString: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @HostBinding('attr.data-id')
  @Input() idString: string;

  ngOnInit() {
    if (this.variant !== 'unstyled') {
      this.renderer.addClass(this.el.nativeElement, 'sprk-b-Link');
    }
    if (this.variant === 'simple' || this.variant === 'icon') {
      this.renderer.addClass(this.el.nativeElement, 'sprk-b-Link--simple');
    }
    if (this.variant === 'icon') {
      this.renderer.addClass(this.el.nativeElement, 'sprk-b-Link--has-icon');
    }
    if (this.variant === 'plain') {
      this.renderer.addClass(this.el.nativeElement, 'sprk-b-Link--plain');
    }
  }

}
