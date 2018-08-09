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
          aria-controls="target-1"
          id="tab1"
          sprk-tabbed-navigation-tab>Tab 1</button>
        <button
          aria-controls="target-2"
          [isActive]=true
          id="tab2"
          sprk-tabbed-navigation-tab>Tab 2</button>
        <button
          aria-controls="target-3"
          id="tab3"
          sprk-tabbed-navigation-tab>Tab 3</button>
        <div id="target-1" aria-labelledby="tab-1" sprk-tabbed-navigation-panel>
          <p>Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla 
            euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh. 
            Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
        <div id="target-2" aria-labelledby="tab-2" isActive="true" sprk-tabbed-navigation-panel>
          <p>Tab 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla 
            euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh. 
            Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
        <div id="target-3" aria-labelledby="tab-3" sprk-tabbed-navigation-panel>
          <p>Tab 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla 
            euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh. 
            Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
      </sprk-tabbed-navigation>
    </div>
  `,
  styles: ['']
})
export class TabbedNavigationDocsComponent {
  constructor() { }
}
