import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-flag',
  template: `
  <div [ngClass]="getClasses()">
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
