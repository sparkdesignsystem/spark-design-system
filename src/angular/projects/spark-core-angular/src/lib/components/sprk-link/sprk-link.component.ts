import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-link',
  template: `
    <a
      [ngClass]="getClasses()"
      [href]="href"
      [attr.data-analytics]="analyticsString"
      [attr.target]="target"
      [attr.data-id]="idString"
    >
      <ng-content></ng-content>
    </a>
  `
})
export class SparkLinkComponent {
  @Input()
  linkType: string;
  @Input()
  href: string;
  @Input()
  idString: string;
  @Input()
  analyticsString: string;
  @Input()
  target: string;
  @Input()
  additionalClasses: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-b-Link'];

    switch (this.linkType) {
      case 'simple':
        classArray.push('sprk-b-Link--simple');
        break;
      case 'disabled':
        classArray.push('sprk-b-Link--disabled');
        break;
      case 'plain':
        classArray.push('sprk-b-Link--plain');
        break;
      case 'icon':
        classArray.push('sprk-b-Link--simple sprk-b-Link--has-icon');
        break;
      default:
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
