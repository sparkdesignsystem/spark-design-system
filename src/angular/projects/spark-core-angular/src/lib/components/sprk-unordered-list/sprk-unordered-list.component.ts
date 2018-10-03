import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-unordered-list',
  template: `
    <ul
      [ngClass]="getClasses()">
      <ng-content></ng-content>
    </ul>
  `
})
export class SparkUnorderedListComponent {
  @Input()
  listType: string;
  @Input()
  additionalClasses: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-b-List'];

    switch (this.listType) {
      case 'indented':
        classArray.push('sprk-b-List--indented');
        break;
      case 'bare':
        classArray.push('sprk-b-List--bare');
        break;
      default:
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
  constructor() {}
}
