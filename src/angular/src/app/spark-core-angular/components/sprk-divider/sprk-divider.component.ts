import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-divider',
  template: `
    <span [ngClass]="getClasses()">
    </span>
  `,
  styles: ['']
})

export class SparkDividerComponent {
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Divider'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

}
