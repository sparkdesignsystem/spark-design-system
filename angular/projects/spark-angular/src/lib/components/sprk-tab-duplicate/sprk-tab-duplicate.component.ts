import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'sprk-tab-duplicate',
  template: `
    <div>
      <button (click)="changeMe()">Change Color</button>
      <sprk-tabbed-navigation idString="tabs-1" [additionalClasses]="newColor">
        <button
          sprkTabbedNavigationTab
          analyticsString="Tab: 1"
          data-id="tab-1"
        >
          Tab 1
        </button>
        <button
          sprkTabbedNavigationTab
          data-id="tab-2"
          [defaultActive]=true
        >
          Tab 2
        </button>
        <button
          sprkTabbedNavigationTab
          data-id="tab-3"
        >
          Tab 3
        </button>
        <div sprkTabbedNavigationPanel>
          <p>Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
          euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
          Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
        <div [defaultActive]=true sprkTabbedNavigationPanel>
          <p>Tab 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
          euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
          Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
        <div sprkTabbedNavigationPanel>
          <p>Tab 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla
          euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh.
          Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
      </sprk-tabbed-navigation>
    </div>
  `
})
export class SprkTabDuplicateComponent {
  // constructor(public ref: ElementRef, public appRef: ChangeDetectorRef) {
  //   setInterval(() => {
  //     console.log('cats set interval')
  //     this.appRef.markForCheck();
  //   }, 1000);
  // }

  newColor= "sprk-u-BackgroundColor--blue";
  changeMe(): void {
    if (this.newColor === "sprk-u-BackgroundColor--red") {
      this.newColor= "sprk-u-BackgroundColor--blue";
    } else { this.newColor = "sprk-u-BackgroundColor--red"}
  }

}
