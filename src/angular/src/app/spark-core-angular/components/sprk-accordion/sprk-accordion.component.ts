import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-accordion',
  template: `
    <ul [ngClass]="getClasses()">
      <ng-content></ng-content>
    </ul>`,
  styles: ['']
})

export class SparkAccordionComponent {
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Accordion',
      'sprk-o-VerticalList'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
