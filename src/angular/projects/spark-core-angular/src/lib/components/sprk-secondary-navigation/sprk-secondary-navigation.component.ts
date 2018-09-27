import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-secondary-navigation',
  template: `
    <nav role="navigation" [ngClass]="getNavClasses()">
      <ul [ngClass]="getClasses()">
        <ng-content></ng-content>
      </ul>
    </nav>`
})
export class SparkSecondaryNavigationComponent {
  @Input()
  additionalClasses: string;
  @Input()
  additionalNavClasses: string;

  getClasses(): string {
    const classArray: string[] = [
      'sprk-o-HorizontalList',
      'sprk-o-HorizontalList--spacing-medium'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getNavClasses(): string {
    const classArray: string[] = [];

    if (this.additionalNavClasses) {
      this.additionalNavClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
