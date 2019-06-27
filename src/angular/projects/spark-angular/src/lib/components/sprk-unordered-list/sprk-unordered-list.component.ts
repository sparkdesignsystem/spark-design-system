import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-unordered-list',
  template: `
    <ul [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content></ng-content>
    </ul>
  `
})
export class SprkUnorderedListComponent {
  @Input()
  listType: string;
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;

  getClasses(): string {
    const classArray: string[] = [''];

    switch (this.listType) {
      case 'indented':
        classArray.push('sprk-b-List');
        classArray.push('sprk-b-List--indented');
        break;
      case 'bare':
        classArray.push('sprk-b-List');
        classArray.push('sprk-b-List--bare');
        break;
      case 'horizontal':
        classArray.push('sprk-o-HorizontalList');
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
