import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sprk-list-item',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class SprkListItemComponent {
  @Input()
  analyticsString: string;
  @Input()
  idString: string;
  @Input()
  additionalClasses: string;

  @ViewChild(TemplateRef) content: TemplateRef<any>;
}
