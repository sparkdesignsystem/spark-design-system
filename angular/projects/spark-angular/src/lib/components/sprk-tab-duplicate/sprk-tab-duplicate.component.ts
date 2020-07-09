import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'sprk-tab-duplicate',
  template: `
    <div>
      <button (click)="changeMe()">Change Color</button>
      <sprk-tabbed-navigation idString="tabs-1" [additionalClasses]="newColor">
        <button *ngFor="let item of list; let i = index"
          sprkTabbedNavigationTab
          analyticsString="Tab: {{i}}"
          data-id="tab-{{i}}"
        >
          {{item}}
        </button>
        <div
        sprkTabbedNavigationPanel
        *ngFor="let item of list; let i = index">
          <p>{{item}}</p>
        </div>
      </sprk-tabbed-navigation>
    </div>
  `
})
export class SprkTabDuplicateComponent {
  public list = ["Tab 1", "Tab 2"];
  public newList = ["Tab 3", "Tab 4"]
  newColor= "sprk-u-BackgroundColor--blue";
  changeMe(): void {
    this.list = this.newList;
  }
}
