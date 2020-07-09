import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-tab-duplicate',
  template: `
    <div>
      <button (click)="changeMe()">Click Me to Change</button>
      hello
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
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component container element.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * `table` element.
   */
  @Input()
  additionalTableClasses: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  newColor= "sprk-u-BackgroundColor--blue";
  changeMe(): void {
    if (this.newColor === "sprk-u-BackgroundColor--red") {
      this.newColor= "sprk-u-BackgroundColor--blue";
    } else { this.newColor = "sprk-u-BackgroundColor--red"}
  }


  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-b-TableContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getTableClasses(): string {
    const classArray: string[] = [
      'sprk-b-Table',
      'sprk-b-Table--spacing-medium',
    ];

    if (this.additionalTableClasses) {
      this.additionalTableClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
