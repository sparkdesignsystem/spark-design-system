import { HostBinding, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sprkSpinner]',
})
export class SprkSpinnerDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  /**
   *  Determines the spinner style.
   */
  @Input() variant: 'primary' | 'secondary' | 'dark';

  /**
   * Assigned to the `aria-valuetext` attribute serving as
   * additional context for screen readers.
   */
  @Input() altText = 'Loading';

  /**
   * Assigned to the `role` attribute serving as
   * additional accessibility context for screen readers.
   */
  @Input() role = 'progressbar';

  /**
   *  Determines the spinner size.
   */
  @Input() size: 'large';

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
    const classArray = ['sprk-c-Spinner', 'sprk-c-Spinner--circle'];
    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }
    return classArray;
  }

  ngOnInit() {
    const el = this.el.nativeElement;
    const variantLookup = {
      primary: 'sprk-c-Spinner--primary',
      secondary: 'sprk-c-Spinner--secondary',
      dark: 'sprk-c-Spinner--dark',
    };

    this.getClasses().forEach((className) => {
      this.renderer.addClass(el, className);
    });

    if (variantLookup.hasOwnProperty(this.variant)) {
      this.renderer.addClass(el, variantLookup[this.variant]);
    }

    this.renderer.setAttribute(this.el.nativeElement, 'role', this.role);
    this.renderer.setAttribute(
      this.el.nativeElement,
      'aria-valuetext',
      this.altText,
    );
    
    this.renderer.setAttribute(this.el.nativeElement, 'role', this.role);
    this.renderer.setAttribute(
      this.el.nativeElement,
      'aria-label',
      this.altText,
    );

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        this.renderer.addClass(this.el.nativeElement, className);
      });
    }

    const sizeLookup = { large: 'sprk-c-Spinner--large' };
    if (sizeLookup.hasOwnProperty(this.size)) {
      this.renderer.addClass(el, sizeLookup[this.size]);
    }
  }
}
