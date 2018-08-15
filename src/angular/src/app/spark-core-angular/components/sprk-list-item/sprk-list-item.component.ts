import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-list-item',
  template: `
    <li
      [ngClass]="getClasses()"
      [attr.data-analytics]="analyticsString">
      <ng-content></ng-content>
    </li>
  `,
  styles: ['']
})
export class SparkListItemComponent {
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [''];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
  constructor() { }
}
