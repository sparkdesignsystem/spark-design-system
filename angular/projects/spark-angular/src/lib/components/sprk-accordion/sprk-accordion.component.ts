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
