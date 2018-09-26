import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-divider',
  template: `
    <span [ngClass]="getClasses()">
    </span>
  `
})
export class SparkDividerComponent {
  @Input()
  additionalClasses: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Divider'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
