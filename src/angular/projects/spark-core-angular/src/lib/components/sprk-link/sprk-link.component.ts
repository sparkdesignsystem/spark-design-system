import { Component, Input, OnInit } from '@angular/core';
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
      [attr.aria-controls]="ariaControls"
      [attr.aria-label]="ariaLabel"
      [attr.aria-labelledby]="ariaLabelledby"
      [attr.aria-haspopup]="ariaHasPopUp"
      [attr.role]="role"
      [attr.aria-current]="ariaCurrent"
      [attr.aria-expanded]="ariaExpanded"
      [attr.aria-hidden]="ariaHidden"
    >
      <ng-content></ng-content>
    </a>
  `
})
export class SparkLinkComponent implements OnInit {
  constructor(public router: Router) {}

  @Input()
  linkType: string;
  @Input()
  href = '#';
  @Input()
  idString: string;
  @Input()
  role: string;
  @Input()
  ariaControls: string;
  @Input()
  ariaLabelledby: string;
  @Input()
  ariaHidden: string;
  @Input()
  ariaCurrent: string;
  @Input()
  ariaExpanded: string;
  @Input()
  ariaHasPopUp: string;
  @Input()
  ariaLabel: string;
  @Input()
  analyticsString: string;
  @Input()
  target: string;
  @Input()
  additionalClasses: string;
  @Input()
  disabled: boolean;

  ngOnInit() {
    if (this.href === '' || this.href === null || this.href === undefined) {
      this.href = '#';
    }
  }

  isExternal(value): boolean {
    return new RegExp('^(http|https)', 'i').test(value);
  }

  isJumpLink(value): boolean {
    return new RegExp('^#.+', 'i').test(value);
  }

  isDefault(value): boolean {
    return value === '#';
  }

  handleClick(event): void {
    if (this.isExternal(this.href)) {
      return;
    }

    event.preventDefault();

    if (this.isDefault(this.href)) {
      return;
    } else if (this.isJumpLink(this.href)) {
      this.router.navigateByUrl(this.router.url + this.href);
    } else {
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
