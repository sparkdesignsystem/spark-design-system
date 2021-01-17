import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sprkTabsPanel]',
})
export class SprkTabsPanelDirective implements OnInit {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * element.
   */
  @Input()
  additionalClasses: string;
  /**
   * If `true`, the Panel will
   * be set as the active Panel on render.
   */
  @Input()
  isDefaultActive: boolean;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
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
  @Input()
  idString: string;
  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-c-Tabs__content'];

    if (!this.isDefaultActive) {
      classArray.push('sprk-u-HideWhenJs');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.renderer.setAttribute(this.ref.nativeElement, 'role', 'tabpanel');
    this.renderer.setAttribute(this.ref.nativeElement, 'tabindex', '0');

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
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}
}
