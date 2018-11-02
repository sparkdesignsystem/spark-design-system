import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClasses()" role="contentinfo">
      <ng-content></ng-content>
    </footer>
  `
})
export class SparkFooterComponent {
  @Input()
  additionalClasses: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-o-Stack'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
