import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkTabbedNavigationPanel]'
})
export class SprkTabbedNavigationPanelDirective implements OnInit {
  @Input()
  additionalClasses: string;
  @Input()
  defaultActive: boolean;

  getClasses(): string[] {
    const classArray: string[] = ['sprk-c-Tabs__content'];

    if (!this.defaultActive) {
      classArray.push('sprk-u-HideWhenJs');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.ref.nativeElement.setAttribute('role', 'tabpanel');
    this.ref.nativeElement.setAttribute('tabindex', '0');

    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }

  constructor(public ref: ElementRef) {}
}
