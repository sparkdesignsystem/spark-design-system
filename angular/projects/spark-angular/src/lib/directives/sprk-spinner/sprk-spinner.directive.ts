import { AfterViewInit } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sprkSpinner]',
})
export class SprkSpinnerDirective implements AfterViewInit {
  /**
   * @ignore
   */
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  /**
   *  Determines the spinner style.
   */
  @Input() variant: 'primary' | 'secondary' | 'dark';

  ngAfterViewInit() {
    const el = this.el.nativeElement;
    const variantLookup = {
      primary: 'sprk-c-Spinner--primary',
      secondary: 'sprk-c-Spinner--secondary',
      dark: 'sprk-c-Spinner--dark',
    };
    this.renderer.addClass(el, 'sprk-c-Spinner');
    this.renderer.addClass(el, 'sprk-c-Spinner--circle');

    if (variantLookup.hasOwnProperty(this.variant)) {
      this.renderer.addClass(el, variantLookup[this.variant]);
    }
  }
}
