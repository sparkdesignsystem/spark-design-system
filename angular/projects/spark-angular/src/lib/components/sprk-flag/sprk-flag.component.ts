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
   * The Flag component will use this to decide where
   * the figure-slot is rendered in relation to the
   * body-slot. The default is the figure-slot is on
   * the left of the body-slot. isReversed places the
   * figure-slot on the right of the body-slot.
   */
  @Input()
  isReversed = false;

  /**
   * The Flag component will use this 
   */
  @Input()
  isStacked = false;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-o-Flag'];

    if (this.isReversed) {
      classArray.push('sprk-o-Flag--rev');
    }

    if (this.isStacked) {
      classArray.push('sprk-o-Flag--stacked');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
