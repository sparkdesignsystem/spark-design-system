import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-list-item',
  template: `
    <li
      [ngClass]="getClasses()"
      [attr.data-analytics]="analyticsString"
      [attr.data-id]="idString"
    >
      <ng-content></ng-content>
    </li>
  `
})
export class SprkListItemComponent {
  @Input()
  analyticsString: string;
  @Input()
  idString: string;
  @Input()
  additionalClasses: string;

  getClasses(): string {
    const classArray: string[] = [];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });

      return classArray.join(' ');
    }
  }
}
