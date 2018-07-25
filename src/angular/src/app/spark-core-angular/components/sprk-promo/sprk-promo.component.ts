import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-promo',
  template: `
    Promo
  `,
  styles: ['']
})

export class SparkPromoComponent {
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
