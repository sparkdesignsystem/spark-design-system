import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-table',
  template:
    `<div [ngClass]="getClasses()">
      <table [ngClass]="getTableClasses()">
        <ng-content></ng-content>
      </table>
    </div>`
})

export class SparkTableComponent {
  @Input() additionalClasses: string;
  @Input() additionalTableClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-b-TableContainer'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  getTableClasses(): string {
    let classArray: Array<String> = [
      'sprk-b-Table',
      'sprk-b-Table--spacing-medium',
      'sprk-b-Table--striped-even',
      'sprk-b-Table--bordered-columns',
      'sprk-b-Table--bordered-columns-inside'
    ];

    if (this.additionalTableClasses) {
      this.additionalTableClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
