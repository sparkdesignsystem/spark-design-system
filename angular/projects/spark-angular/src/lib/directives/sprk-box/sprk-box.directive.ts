import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sprkBox]'
})
export class SprkBoxDirective implements OnInit {
  @Input() spacing:
      'flush' |
      'tiny' |
      'small' |
      'large' |
      'huge' |
      'insetShortTiny' |
      'insetShortSmall' |
      'insetShortMedium' |
      'insetShortLarge' |
      'insetShortHuge' |
      'insetTallTiny' |
      'insetTallSmall' |
      'insetTallMedium' |
      'insetTallLarge' |
      'insetTallHuge' |
      'miscA' |
      'miscB' |
      'miscC' |
      'miscD'
  ;

  ngOnInit(): void {
    const spaces = {
      flush: 'sprk-o-Box--flush',
      tiny: 'sprk-o-Box--tiny',
      small: 'sprk-o-Box--small',
      large: 'sprk-o-Box--large',
      huge: 'sprk-o-Box--huge',
      insetShortTiny: 'sprk-o-Box--inset-short-tiny',
      insetShortSmall: 'sprk-o-Box--inset-short-small',
      insetShortMedium: 'sprk-o-Box--inset-short-medium',
      insetShortLarge: 'sprk-o-Box--inset-short-large',
      insetShortHuge: 'sprk-o-Box--inset-short-huge',
      insetTallTiny: 'sprk-o-Box--inset-tall-tiny',
      insetTallSmall: 'sprk-o-Box--inset-tall-small',
      insetTallMedium: 'sprk-o-Box--inset-tall-medium',
      insetTallLarge: 'sprk-o-Box--inset-tall-large',
      insetTallHuge: 'sprk-o-Box--inset-tall-huge',
      miscA: 'sprk-o-Box--misc-a',
      miscB: 'sprk-o-Box--misc-b',
      miscC: 'sprk-o-Box--misc-c',
      miscD: 'sprk-o-Box--misc-d',
    };

    this.renderer.addClass(this.ref.nativeElement, 'sprk-o-Box');

    if (this.spacing) {
      this.renderer.addClass(this.ref.nativeElement, spaces[this.spacing]);
    }
  }

  /**
   * @ignore
   */
  constructor(private renderer: Renderer2, public ref: ElementRef) {}
}
