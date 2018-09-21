import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  QueryList
} from '@angular/core';
import {
  advanceTab,
  ariaOrientation,
  getActiveTabIndex,
  resetTabs,
  retreatTab,
  setActiveTab
} from '@sparkdesignsystem/spark-core/components/tabs';
import * as _ from 'lodash';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';

@Component({
  selector: 'sprk-tabbed-navigation',
  template: `
    <div [ngClass]="getClasses()" role="tablist">
      <div class="sprk-c-Tabs__buttons">
        <ng-content select="[sprkTabbedNavigationTab]"></ng-content>
      </div>
      <ng-content select="[sprkTabbedNavigationPane]"></ng-content>
      <ng-content></ng-content>
    </div>`
})
export class SparkTabbedNavigationComponent implements AfterContentInit {
  @Input()
  additionalClasses: string;
  @ContentChildren(SprkTabbedNavigationTabDirective)
  tabs: QueryList<SprkTabbedNavigationTabDirective>;
  @ContentChildren(SprkTabbedNavigationPanelDirective)
  panels: QueryList<SprkTabbedNavigationPanelDirective>;
  componentID = _.uniqueId();

  @HostListener('click', ['$event'])
  onClick($event) {
    if ($event.target.classList.contains('sprk-c-Tabs__button')) {
      const activePanel = this.panels.find(panel => {
        return (
          panel.ref.nativeElement.id ===
          $event.target.getAttribute('aria-controls')
        );
      });

      resetTabs(
        this.tabs.map(tab => tab.ref.nativeElement),
        this.panels.map(panel => panel.ref.nativeElement)
      );

      setActiveTab($event.target, activePanel.ref.nativeElement);
    }
  }

  @HostListener('window:resize')
  onResize() {
    ariaOrientation(window.innerWidth, this.ref.nativeElement);
  }

  @HostListener('keydown', ['$event'])
  onKeydown($event) {
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      right: 39,
      tab: 9
    };

    const tabElements = this.tabs.map(tab => tab.ref.nativeElement);
    const panelElements = this.panels.map(panel => panel.ref.nativeElement);

    if ($event.keyCode === keys.left) {
      retreatTab(tabElements, panelElements);
    } else if ($event.keyCode === keys.right) {
      advanceTab(tabElements, panelElements);
    } else if ($event.keyCode === keys.tab) {
      if ($event.target.classList.contains('sprk-c-Tabs__button')) {
        event.preventDefault();
        panelElements[getActiveTabIndex(tabElements)].focus();
      }
    } else if ($event.keyCode === keys.home) {
      setActiveTab(tabElements[0], panelElements[0]);
    } else if ($event.keyCode === keys.end) {
      setActiveTab(
        tabElements[tabElements.length - 1],
        panelElements[panelElements.length - 1]
      );
    }
  }

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Tabs'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngAfterContentInit(): void {
    let tabIDs = [];
    let panelIDs = [];

    if (this.tabs && this.panels) {
      this.tabs.forEach((tab, index) => {
        const tabID = `tabbed-navigation-${this.componentID}-tab-${index}`;
        const panelID = `tabbed-navigation-${this.componentID}-panel-${index}`;

        tab.ref.nativeElement.setAttribute('id', tabID);
        tab.ref.nativeElement.setAttribute('aria-controls', panelID);
        tabIDs.push(tabID);
        panelIDs.push(panelID);
      });

      tabIDs = tabIDs.reverse();
      panelIDs = panelIDs.reverse();

      this.panels.forEach(panel => {
        panel.ref.nativeElement.setAttribute('id', panelIDs.pop());
        panel.ref.nativeElement.setAttribute('aria-labelledby', tabIDs.pop());
      });
    }
  }

  constructor(public ref: ElementRef) {
    ariaOrientation(window.innerWidth, this.ref.nativeElement);
  }
}
