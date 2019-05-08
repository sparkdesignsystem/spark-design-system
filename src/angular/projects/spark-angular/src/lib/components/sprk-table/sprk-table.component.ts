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
  @Input()
  additionalClasses: string;
  @Input()
  additionalTableClasses: string;
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
