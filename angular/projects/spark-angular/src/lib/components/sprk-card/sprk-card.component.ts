import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-card',
  template: `
    <div [ngClass]="getClassesCard()" [attr.data-id]="idString">
      <ng-content></ng-content>
    </div>
  `,
})
export class SprkCardComponent {
  /**
   * If `true`, the Card will receive
   * the standout design styles.
   */
  @Input()
  isStandout: boolean;
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
  getClassesCard(): string {
    const classArray: string[] = ['sprk-c-Card', 'sprk-o-Stack'];

    if (this.isStandout) {
      classArray.push('sprk-c-Card--standout');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
