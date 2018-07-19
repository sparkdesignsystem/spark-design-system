import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-secondary-navigation-item',
  template: `
    <li [ngClass]="getClasses()">
      <a class="sprk-b-Link sprk-b-Link--standalone" [routerLink]="href">{{ text }}</a>
    </li>
  `,
  styles: [
    '.sprkng-spacing-override--tiny { margin-right: 0.25rem;}',
    ':host:last-child li { margin-right: 0 !important;}'
  ]
})

export class SparkSecondaryNavigationItemComponent {
  @Input() additionalClasses: string;
  @Input() href: string;
  @Input() text: string;
  @Input() spacing: string = 'medium';

  getClasses(): string {
    let classArray: Array<String> = [];

    switch (this.spacing) {
      // TODO: open a pr on scales to add tiny to utils
      case 'tiny':
        classArray.push('sprkng-spacing-override--tiny');
        break;
      case 'small':
        classArray.push('sprk-u-mrs');
        break;
      case 'large':
        classArray.push('sprk-u-mrl');
        break;
      case 'huge':
        classArray.push('sprk-u-mrh');
        break;
      default:
        classArray.push('sprk-u-mrm');
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
