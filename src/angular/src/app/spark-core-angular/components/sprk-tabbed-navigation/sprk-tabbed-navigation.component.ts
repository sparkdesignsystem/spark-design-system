import { Component, Input, ContentChildren, QueryList, AfterContentInit, HostListener } from '@angular/core';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-tabbed-navigation',
  template: `
    <div [ngClass]="getClasses()" role="tablist" [attr.aria-orientation]="orientation">
      <div class="sprk-c-Tabs__buttons">
        <ng-content select="[sprk-tabbed-navigation-tab]"></ng-content> 
      </div>
      <ng-content select="[sprk-tabbed-navigation-panel]"></ng-content>
      <ng-content></ng-content>
    </div>`
})

export class SparkTabbedNavigationComponent implements AfterContentInit {
  @Input() additionalClasses: string;
  @Input() orientation: string = 'horizontal';

  @HostListener('click', ['$event']) onClick($event){

    if($event.target.classList.contains('sprk-c-Tabs__button')) {
      let activePanel = this.panels.find((panel) => {
        return panel.ref.nativeElement.id === $event.target.getAttribute('aria-controls');
      });

      this.tabs.forEach((tab) => {
        tab.ref.nativeElement.classList.remove('sprk-c-Tabs__button--active');
        tab.ref.nativeElement.setAttribute('aria-selected', 'false');
      });

      $event.target.classList.add('sprk-c-Tabs__button--active');
      $event.target.setAttribute('aria-selected', 'true');

      this.panels.forEach((panel) => {
        panel.ref.nativeElement.classList.add('sprk-u-Display--none');
      });

      activePanel.ref.nativeElement.classList.remove('sprk-u-Display--none');
    }
  }

  componentID = _.uniqueId();

  @ContentChildren(SprkTabbedNavigationTabDirective) tabs: QueryList<SprkTabbedNavigationTabDirective>;
  @ContentChildren(SprkTabbedNavigationPanelDirective) panels: QueryList<SprkTabbedNavigationPanelDirective>;

  getClasses(): string {
    let classArray: Array<String> = ['sprk-c-Tabs'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  ngAfterContentInit(): void {
    let tabIDs = [];
    let panelIDs = [];

    if(this.tabs && this.panels) {
      this.tabs.forEach((tab, index) => {
        let tabID = `tabbed-navigation-${this.componentID}-tab-${index}`;
        let panelID = `tabbed-navigation-${this.componentID}-panel-${index}`;

        tab.ref.nativeElement.setAttribute('id', tabID);
        tab.ref.nativeElement.setAttribute('aria-controls', panelID);
        tabIDs.push(tabID);
        panelIDs.push(panelID);
      });

      tabIDs = tabIDs.reverse();
      panelIDs = panelIDs.reverse();

      this.panels.forEach((panel, index) => {
        panel.ref.nativeElement.setAttribute('id', panelIDs.pop());
        panel.ref.nativeElement.setAttribute('aria-labelledby', tabIDs.pop());
      });
    }
  }
}
