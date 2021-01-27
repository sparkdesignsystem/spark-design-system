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
  `,
})
/**
 * @deprecate This component will be removed in
 * a future release in favor of the `sprkLink` directive.
 * Please use the Spark Link
 * directive.
 */
export class SprkLinkComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(public router: Router) {}

  /**
   * Will cause the appropriate variant type to render.
   * Optional values are: `simple`, `icon`, `unstyled` or `plain`.
   * If omitted, the default Spark Link class is applied.
   * The `unstyled` variant will render an `href` with no
   * CSS classes.
   */
  @Input()
  linkType: string;
  /**
   * The `href` value of the link. If omitted,
   * the href will be set to `#`
   * and the routing will be disabled. If
   * set to reference an ID then the page
   * will scroll to that anchor as normal.
   */
  @Input()
  href: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * Value for the `role`
   * attribute of the link.
   */
  @Input()
  role: string;
  /**
   * The string that will be
   * assigned to the `id` attribute of
   * the link.
   */
  @Input()
  id: string;
  /**
   * Expects a value to assign to the
   * `aria-controls` attribute of the link.
   */
  @Input()
  ariaControls: string;
  /**
   * Expects a value to assign to
   * the `aria-labelledby` attribute of the link.
   */
  @Input()
  ariaLabelledby: string;
  /**
   * Expects a value to assign to
   * the `aria-selected` attribute of the link.
   */
  @Input()
  ariaSelected: string;
  /**
   * Expects a value to assign to
   * the `aria-hidden` attribute of the link.
   */
  @Input()
  ariaHidden: string;
  /**
   * Expects a value to assign
   * to the `aria-curren`t attribute of the link.
   */
  @Input()
  ariaCurrent: string;
  /**
   * Expects a value to assign to
   * the `aria-expanded `attribute of the link.
   */
  @Input()
  ariaExpanded: string;
  /**
   * Expects a value to assign
   * to the `aria-haspopup` attribute of the link.
   */
  @Input()
  ariaHasPopUp: string;
  /**
   * Expects a value to assign to
   * the `aria-label` attribute of the link.
   */
  @Input()
  ariaLabel: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * Expects a value to assign to
   * the `target` attribute of the link.
   */
  @Input()
  target: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * If `true`, will set disabled styles on the link.
   */
  @Input()
  isDisabled: boolean;
  /**
   * By default, the component determines if
   * the `href` is an external or internal link
   * by looking for the `:` character in the
   * `href` string. If external link functionality
   * is desired with an `href` value that contains
   * a `:` set this input to true. This overrides
   * the default and avoids using the Angular Router.
   */
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
  /**
   * @ignore
   */
  isExternalLink(value): boolean {
    return new RegExp('^.*:', 'i').test(value);
  }
  /**
   * @ignore
   */
  isJumpLinkWithPage(value): boolean {
    return new RegExp('^.*#.+', 'i').test(value);
  }
  /**
   * @ignore
   */
  isJumpLink(value): boolean {
    return new RegExp('^#.+', 'i').test(value);
  }
  /**
   * @ignore
   */
  isNoActionLink(value): boolean {
    return value === '#';
  }
  /**
   * @ignore
   */
  getPathWithoutHash(value): string {
    return value.split('#')[0];
  }
  /**
   * @ignore
   */
  scrollToId() {
    const elementID = this.href.split('#').pop();
    const element: HTMLElement = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView();
    }
  }
  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
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
          'sprk-b-Link sprk-b-Link--simple sprk-b-Link--has-icon',
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
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
