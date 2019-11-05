import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-accordion',
  template: `
    <ul [ngClass]="getClasses()">
      <ng-content></ng-content>
    </ul>
  `
})
export class SprkAccordionComponent {
  @Input()
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Accordion', 'sprk-o-VerticalList'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
