import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sprk-link',
  template: `
    <a
      (click)="handleClick($event)"
      [ngClass]="getClasses()"
      [href]="href"
      [attr.data-analytics]="analyticsString"
      [attr.target]="target"
      [attr.data-id]="idString"
      [attr.disabled]="disabled"
    >
      <ng-content></ng-content>
    </a>
  `
})
export class SparkLinkComponent {
  constructor(public router: Router) {}

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
  @Input()
  disabled: boolean;

  isExternal(value): boolean {
    return new RegExp('^(http|https)', 'i').test(value);
  }

  handleClick(event): void {
    if (this.isExternal(this.href)) {
      return;
    } else {
      event.preventDefault();
      this.router.navigateByUrl(this.href);
    }
  }

  getClasses(): string {
    const classArray: string[] = [];

    switch (this.linkType) {
      case 'unstyled':
        break;
      case 'simple':
        classArray.push('sprk-b-Link sprk-b-Link--simple');
        break;
      case 'plain':
        classArray.push('sprk-b-Link sprk-b-Link--plain');
        break;
      case 'icon':
        classArray.push(
          'sprk-b-Link sprk-b-Link--simple sprk-b-Link--has-icon'
        );
        break;
      default:
        classArray.push('sprk-b-Link');
        break;
    }

    if (this.disabled) {
      classArray.push('sprk-b-Link--disabled');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
