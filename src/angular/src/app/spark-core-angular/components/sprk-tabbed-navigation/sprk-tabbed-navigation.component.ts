import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-tabbed-navigation',
  template: `
    <div [ngClass]="getClasses()" role="tablist" [attr.aria-orientation]="orientation"></div>
  `
})

export class SparkTabbedNavigationComponent {
  @Input() additionalClasses: string;
  @Input() orientation: string = 'horizontal';

  getClasses(): string {
    let classArray: Array<String> = ['sprk-c-Tabs'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
