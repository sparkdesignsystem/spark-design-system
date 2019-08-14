import { Component, Input, ContentChildren, QueryList } from '@angular/core';
import { SprkListItemComponent } from '../sprk-list-item/sprk-list-item.component';

@Component({
  selector: 'sprk-unordered-list',
  template: `
    <ul [ngClass]="getClasses()" [attr.data-id]="idString">
      <li
        *ngFor="let item of items; "
        [attr.data-analytics]="item.analyticsString"
        [attr.data-id]="item.idString"
        [ngClass]="item.additionalClasses"
      >
        <ng-container [ngTemplateOutlet]="item.content"></ng-container>
      </li>
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

  @ContentChildren(SprkListItemComponent) items: QueryList<
    SprkListItemComponent
  >;

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
