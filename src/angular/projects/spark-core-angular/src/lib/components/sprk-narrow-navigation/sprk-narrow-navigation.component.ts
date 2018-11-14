import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-narrow-navigation',
  template: `
    <nav role="navigation"
    [attr.data-id]="idString">
      <ul [ngClass]="getClasses()">
        <ng-content></ng-content>
      </ul>
    </nav>`
})
export class SparkNarrowNavigationComponent {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;

  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Accordion',
      'sprk-c-Accordion--navigation',
      'sprk-b-List',
      'sprk-b-List--bare'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
