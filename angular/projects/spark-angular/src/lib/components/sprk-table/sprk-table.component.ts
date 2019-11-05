import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-table',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <table [ngClass]="getTableClasses()">
        <ng-content></ng-content>
      </table>
    </div>
  `
})
export class SprkTableComponent {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component container.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * table element.
   */
  @Input()
  additionalTableClasses: string;
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

  getClasses(): string {
    const classArray: string[] = ['sprk-b-TableContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getTableClasses(): string {
    const classArray: string[] = [
      'sprk-b-Table',
      'sprk-b-Table--spacing-medium',
      'sprk-b-Table--striped-even',
      'sprk-b-Table--bordered-columns',
      'sprk-b-Table--bordered-columns-inside'
    ];

    if (this.additionalTableClasses) {
      this.additionalTableClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
