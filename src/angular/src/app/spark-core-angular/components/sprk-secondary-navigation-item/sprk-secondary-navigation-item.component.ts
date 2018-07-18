import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-secondary-navigation-item',
  template: `
    <li [ngClass]="getClasses()">
      <a class="sprk-b-Link sprk-b-Link--standalone" [routerLink]="href">{{ text }}</a>
    </li>
  `,
  styles: ['']
})

export class SparkSecondaryNavigationItemComponent {
  @Input() additionalClasses: string;
  @Input() href: string;
  @Input() text: string;

  getClasses(): string {
    let classArray: Array<String> = [];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
