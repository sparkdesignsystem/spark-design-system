import { Directive, ElementRef, Input, OnInit } from '@angular/core';

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
    this.ref.nativeElement.setAttribute('role', 'tabpanel');
    this.ref.nativeElement.setAttribute('tabindex', '0');

    this.getClasses().forEach((item) => {
      this.ref.nativeElement.classList.add(item);
    });
  }
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}
}
