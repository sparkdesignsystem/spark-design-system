import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-link',
  template: `
    <a
      [ngClass]="getClasses()"
      [href]="href"
      [attr.data-analytics]="analyticsString">
      <ng-content></ng-content>
    </a>
  `,
  styles: ['']
})

export class SparkLinkComponent {
  @Input() linkType: string;
  @Input() href: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
    'sprk-b-Link'
    ];

    switch (this.linkType) {
      case 'standalone':
        classArray.push('sprk-b-Link--standalone');
        break;
      case 'disabled':
        classArray.push('sprk-b-Link--disabled');
        break;
      default:
        break;
    }

    if(this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
