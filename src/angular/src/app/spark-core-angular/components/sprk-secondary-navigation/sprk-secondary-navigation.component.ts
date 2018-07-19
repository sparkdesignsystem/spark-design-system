import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-secondary-navigation',
  template: `
    <nav role="navigation">
      <ul [ngClass]="getClasses()">
        <ng-content></ng-content>
      </ul>
    </nav>`,
  styles: []
})

export class SparkSecondaryNavigationComponent {
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-o-HorizontalList',
      'sprk-o-HorizontalList--spacing-medium'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
