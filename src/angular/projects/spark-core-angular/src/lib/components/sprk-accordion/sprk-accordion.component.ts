import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-accordion',
  template: `
    <ul [ngClass]="getClasses()">
      <ng-content></ng-content>
    </ul>`
})
export class SparkAccordionComponent {
  @Input()
  additionalClasses: string;
  @Input()
  accordionType: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Accordion', 'sprk-o-VerticalList'];

    if (this.accordionType === 'secondary') {
      classArray.push('sprk-c-Accordion--secondary');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
