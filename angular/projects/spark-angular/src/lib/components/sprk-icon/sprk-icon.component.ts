import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-icon',
  template: `
    <svg
      [ngClass]="getClasses()"
      [attr.viewBox]="viewBox"
      [attr.aria-labelledby]="ariaLabelledby"
      [attr.aria-hidden]="ariaHidden"
      [attr.focusable]="focusableAttr"
      [attr.data-id]="idString"
    >
      <use [attr.xlink:href]="icon" />
    </svg>
  `,
  styles: [':host { line-height: 1; }'],
})
export class SprkIconComponent {
  /** The viewbox of the svg containing the symbol. */
  @Input()
  viewBox = '0 0 64 64';
  /**
   * Determines which icon is rendered.
   * Expects the value to match the exact name
   * of the icon found in the docs
   * (i.e. `chevron-down`, instead of `chevron down`).
   */
  @Input()
  iconName: string;
  // TODO: Deprecate on next release
  /**
   * Deprecated and to be removed next release.
   * Use `iconName` instead.
   * Determines which icon is rendered.
   * Expects the value to match the exact name
   * of the icon found in the docs
   * (i.e. `chevron-down`, instead of `chevron down`).
   */
  @Input()
  iconType: string;
  /**
   * Expects a value to assign to
   * the `aria-labelledby` attribute of the icon.
   */
  @Input()
  ariaLabelledby: string;
  /**
   * Expects a value to assign to
   * the `aria-hidden` attribute of the icon.
   */
  @Input()
  ariaHidden: string;
  /**
   * Expects a value to assign to
   * the `focusable` attribute of the icon. This is a
   * deprecated SVG attribute that is only included for
   * IE 11 compatibility.
   */
  @Input()
  focusableAttr: boolean = false;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
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
   * @ignore
   */
  public icon: string;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Icon'];

    // TODO: Deprecate iconType
    this.icon = `#${this.iconName || this.iconType}`;

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
