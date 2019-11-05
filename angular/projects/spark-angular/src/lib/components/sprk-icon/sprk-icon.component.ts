import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-icon',
  template: `
    <svg [ngClass]="getClasses()" viewBox="0 0 64 64" [attr.data-id]="idString">
      <use [attr.xlink:href]="icon" />
    </svg>
  `,
  styles: [':host { line-height: 1; }']
})
export class SprkIconComponent {
  @Input()
  iconType: string;
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

    this.icon = `#${this.iconType}`;

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
