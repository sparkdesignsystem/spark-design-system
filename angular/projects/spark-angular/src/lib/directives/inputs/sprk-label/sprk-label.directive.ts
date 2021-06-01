import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[sprkLabel]',
})
export class SprkLabelDirective implements OnInit {
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
   * If `true`, this will add
   * disabled styles to the label.
   */
  @Input()
  isDisabled: boolean;

  /**
   * If `true`, this will add
   * `sprk-u-ScreenReaderText` class
   * to the label.
   */
  @Input()
  isHidden: boolean;

  /**
   * If `true`, this will add
   * monetary styles to the label.
   */
  @Input()
  isMonetary: boolean;

  ngOnInit(): void {
    this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Label');
    if (this.isDisabled) {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Label--disabled');
    }
    if (this.isHidden) {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-u-ScreenReaderText');
    }
    if (this.isMonetary) {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Label--monetary');
    }
  }
}
