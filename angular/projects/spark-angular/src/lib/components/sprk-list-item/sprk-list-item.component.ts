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
  /**
   * The value supplied will be assigned
   * to the 'data-id' attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  @Input()
  additionalClasses: string;

  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any>;
}
