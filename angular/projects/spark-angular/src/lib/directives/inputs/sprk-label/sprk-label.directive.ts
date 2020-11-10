import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sprkLabel]',
})
export class SprkLabelDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}
  /**
   * If `true`, this will add
   * styles to the label to make it work
   * with an icon.
   */
  @Input()
  hasIcon: boolean;

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

  ngOnInit(): void {
    this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Label');
    if (this.hasIcon) {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Label--with-icon');
    }
    if (this.isDisabled) {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-b-Label--disabled');
    }
    if (this.isHidden) {
      this.renderer.addClass(this.ref.nativeElement, 'sprk-u-ScreenReaderText');
    }
  }
}
