import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-promo',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content></ng-content>
    </div>
  `,
})
export class SprkPromoComponent {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * If `true`, the Flag Promo variant styles
   * will be added to the component.
   */
  @Input()
  isFlag: boolean;
  /**
   * If `true`, the Promo will be rendered
   * with a border.
   */
  @Input()
  hasBorder: boolean;
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
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Promo', 'sprk-o-Stack'];

    if (this.isFlag) {
      classArray.push('sprk-c-Promo--flag');
    }

    if (this.hasBorder) {
      classArray.push('sprk-c-Promo--bordered');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }
}
