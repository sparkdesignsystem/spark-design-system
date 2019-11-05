import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkTabbedNavigationTab]'
})
export class SprkTabbedNavigationTabDirective implements OnInit {
  @Input()
  additionalClasses: string;
  @Input()
  defaultActive: boolean;
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

    if (this.defaultActive) {
      classArray.push('sprk-c-Tabs__button--active');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });

    this.ref.nativeElement.setAttribute('role', 'tab');
    this.ref.nativeElement.setAttribute(
      'aria-selected',
      this.defaultActive ? 'true' : 'false'
    );

    if (this.analyticsString) {
      this.ref.nativeElement.setAttribute(
        'data-analytics',
        this.analyticsString
      );
    }
  }

  constructor(public ref: ElementRef) {}
}
