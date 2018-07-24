import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-secondary-navigation-item',
  template: `
    <li [ngClass]="getClasses()">
      <a class="sprk-b-Link sprk-b-Link--standalone" 
        [routerLink]="href"
        [attr.data-analytics]="analyticsString">{{ text }}</a>
    </li>
  `,
  styles: [
    ':host:last-child li { margin-right: 0 !important;}'
  ]
})

export class SparkSecondaryNavigationItemComponent {
  @Input() additionalClasses: string;
  @Input() analyticsString: string;
  @Input() href: string;
  @Input() text: string;
  @Input() spacing: string = 'medium';

  getClasses(): string {
    let classArray: Array<String> = [];

    switch (this.spacing) {
      case 'tiny':
        classArray.push('sprk-u-mrt');
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
