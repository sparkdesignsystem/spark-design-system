import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkTabsButton]',
})
export class SprkTabsButtonDirective implements OnInit {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * element.
   */
  @Input()
  additionalClasses: string;
  /**
   * If `true`, the Tab will have
   * active styles and aria attributes on render.
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
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-c-Tabs__button'];

    if (this.isDefaultActive) {
      classArray.push('sprk-c-Tabs__button--active');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((item) => {
      this.ref.nativeElement.classList.add(item);
    });

    this.ref.nativeElement.setAttribute('role', 'tab');
    this.ref.nativeElement.setAttribute(
      'aria-selected',
      this.isDefaultActive ? 'true' : 'false',
    );

    if (this.analyticsString) {
      this.ref.nativeElement.setAttribute(
        'data-analytics',
        this.analyticsString,
      );
    }
  }
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}
}
