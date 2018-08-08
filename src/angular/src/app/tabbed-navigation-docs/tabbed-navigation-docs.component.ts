import { Component } from '@angular/core';

@Component({
  selector: 'sprk-tabbed-navigation-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Tabbed Navigation 
      </h2>
      
      <sprk-tabbed-navigation>
        <button
          controlsId="target-1"
          id="tab1"
          sprk-tabbed-navigation-tab>Tab 1</button>
        <button
          controlsId="target-2"
          [isActive]=true
          id="tab2"
          sprk-tabbed-navigation-tab>Tab 2</button>
        <button
          controlsId="target-3"
          id="tab3"
          sprk-tabbed-navigation-tab>Tab 3</button>
      </sprk-tabbed-navigation>
    </div>
  `,
  styles: ['']
})
export class TabbedNavigationDocsComponent {

  constructor() { }
}
