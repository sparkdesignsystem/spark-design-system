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
      [attr.disabled]="isDisabled"
      [attr.aria-controls]="ariaControls"
      [attr.aria-label]="ariaLabel"
      [attr.aria-labelledby]="ariaLabelledby"
      [attr.aria-haspopup]="ariaHasPopUp"
      [attr.role]="role"
      [attr.id]="id"
      [attr.aria-current]="ariaCurrent"
      [attr.aria-expanded]="ariaExpanded"
      [attr.aria-hidden]="ariaHidden"
      [attr.aria-selected]="ariaSelected"
    >
      <ng-content></ng-content>
    </a>
  `
})
export class SprkLinkComponent implements OnInit {
  constructor(public router: Router) {}

  @Input()
  linkType: string;
  @Input()
  href: string;
  /**
   * The value supplied will be assigned
   * to the 'data-id' attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  @Input()
  role: string;
  @Input()
  id: string;
  @Input()
  ariaControls: string;
  @Input()
  ariaLabelledby: string;
  @Input()
  ariaSelected: string;
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
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  @Input()
  isDisabled: boolean;
  @Input()
  isExternal = false;

  ngOnInit() {
    // Sets the default href if none provided
    if (this.href === '' || this.href === null || this.href === undefined) {
      this.href = '#';
      return;
    }
    // Build jump link's href
    if (this.isJumpLink(this.href)) {
      this.href = `${this.getPathWithoutHash(this.router.url)}${this.href}`;
    }
  }

  isExternalLink(value): boolean {
    return new RegExp('^.*:', 'i').test(value);
  }

  isJumpLinkWithPage(value): boolean {
    return new RegExp('^.*#.+', 'i').test(value);
  }

  isJumpLink(value): boolean {
    return new RegExp('^#.+', 'i').test(value);
  }

  isNoActionLink(value): boolean {
    return value === '#';
  }

  getPathWithoutHash(value): string {
    return value.split('#')[0];
  }

  scrollToId() {
    const elementID = this.href.split('#').pop();
    const element: HTMLElement = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView();
    }
  }

  handleClick(event): void {
    // Let browser handle route if external Link
    if (this.isExternalLink(this.href) || this.isExternal) {
      return;
    }

    event.preventDefault();

    // Prevent default and return
    if (this.isNoActionLink(this.href)) {
      return;
    } else if (this.isJumpLinkWithPage(this.href)) {
      if (
        this.getPathWithoutHash(this.href) ===
        this.getPathWithoutHash(this.router.url)
      ) {
        this.scrollToId();
      } else {
        this.router.navigateByUrl(this.href);
      }
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

    if (this.isDisabled) {
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
