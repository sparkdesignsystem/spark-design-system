import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-flag',
  template: `
  <div
    [ngClass]="getClasses()"
    [attr.data-id]="idString"
  >
    <div class="sprk-o-Flag__figure">
      <ng-content select="[figure-slot]"></ng-content>
    </div>
    <div class="sprk-o-Flag__body">
      <ng-content select="[body-slot]"></ng-content>
    </div>
  </div>
  `
})

export class SprkFlagComponent {
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
  getClasses(): string {
    const classArray: string[] = ['sprk-o-Flag'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
