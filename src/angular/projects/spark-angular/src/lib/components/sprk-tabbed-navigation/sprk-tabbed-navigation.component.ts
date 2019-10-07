import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  QueryList
} from '@angular/core';
import * as _ from 'lodash';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';

@Component({
  selector: 'sprk-tabbed-navigation',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <div class="sprk-c-Tabs__buttons" role="tablist">
        <ng-content select="[sprkTabbedNavigationTab]"></ng-content>
      </div>
      <ng-content select="[sprkTabbedNavigationPane]"></ng-content>
      <ng-content></ng-content>
    </div>
  `
})
export class SprkTabbedNavigationComponent implements AfterContentInit {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;
  @ContentChildren(SprkTabbedNavigationTabDirective)
  tabs: QueryList<SprkTabbedNavigationTabDirective>;
  @ContentChildren(SprkTabbedNavigationPanelDirective)
  panels: QueryList<SprkTabbedNavigationPanelDirective>;
  componentID = _.uniqueId();
  activeClass = 'sprk-c-Tabs__button--active';

  @HostListener('click', ['$event'])
  onClick($event) {
    if ($event.target.classList.contains('sprk-c-Tabs__button')) {
      const activePanel = this.panels.find(panel => {
        return (
          panel.ref.nativeElement.id ===
          $event.target.getAttribute('aria-controls')
        );
      });

      this.resetTabs(
        this.tabs.map(tab => tab.ref.nativeElement),
        this.panels.map(panel => panel.ref.nativeElement),
        this.activeClass
      );

      this.setActiveTab(
        $event.target,
        activePanel.ref.nativeElement,
        this.activeClass
      );
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.ariaOrientation(window.innerWidth, this.ref.nativeElement);
  }

  @HostListener('keydown', ['$event'])
  onKeydown($event) {
    const isPanel = $event.target.classList.contains('sprk-c-Tabs__content');
    if (isPanel) {
      return;
    }

    const keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      tab: 9
    };

    const tabElements = this.tabs.map(tab => tab.ref.nativeElement);
    const panelElements = this.panels.map(panel => panel.ref.nativeElement);

    if ($event.keyCode === keys.left || $event.keyCode === keys.up) {
      this.retreatTab(tabElements, panelElements, this.activeClass);
    } else if ($event.keyCode === keys.right || $event.keyCode === keys.down) {
      this.advanceTab(tabElements, panelElements, this.activeClass);
    } else if ($event.keyCode === keys.tab) {
      if ($event.target.getAttribute('role') === 'tab') {
        event.preventDefault();
        panelElements[
          this.getActiveTabIndex(tabElements, this.activeClass)
        ].focus();
      }
    } else if ($event.keyCode === keys.home) {
      this.setActiveTab(tabElements[0], panelElements[0], this.activeClass);
    } else if ($event.keyCode === keys.end) {
      this.setActiveTab(
        tabElements[tabElements.length - 1],
        panelElements[panelElements.length - 1],
        this.activeClass
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

  advanceTab(tabs, tabpanels, activeClass) {
    const activeIndex = this.getActiveTabIndex(tabs, activeClass);
    this.resetTabs(tabs, tabpanels, activeClass);

    if (activeIndex + 1 <= tabs.length - 1) {
      this.setActiveTab(
        tabs[activeIndex + 1],
        tabpanels[activeIndex + 1],
        activeClass
      );
    } else {
      this.setActiveTab(tabs[0], tabpanels[0], activeClass);
    }
  }

  ariaOrientation(width, element) {
    // switch aria-orientation on mobile (based on _tabs.scss breakpoint)
    if (width <= 736) {
      element.setAttribute('aria-orientation', 'vertical');
    } else {
      element.setAttribute('aria-orientation', 'horizontal');
    }
  }

  getActiveTabIndex(tabs, activeClass) {
    let activeIndex = null;
    tabs.forEach((tab, index) => {
      if (
        tab.classList.contains(activeClass || 'sprk-c-Tabs__button--active')
      ) {
        activeIndex = index;
      }
    });

    return activeIndex;
  }

  resetTabs(tabs, tabpanels, activeClass) {
    tabs.forEach(tab => {
      tab.classList.remove(activeClass || 'sprk-c-Tabs__button--active');
      tab.removeAttribute('tabindex');
      tab.setAttribute('aria-selected', 'false');
      tabpanels.forEach(panel => {
        panel.classList.add('sprk-u-HideWhenJs');
      });
    });
  }

  retreatTab(tabs, tabpanels, activeClass) {
    const activeIndex = this.getActiveTabIndex(tabs, activeClass);

    this.resetTabs(tabs, tabpanels, activeClass);

    if (activeIndex - 1 === -1) {
      this.setActiveTab(
        tabs[tabs.length - 1],
        tabpanels[tabs.length - 1],
        activeClass
      );
    } else {
      this.setActiveTab(
        tabs[activeIndex - 1],
        tabpanels[activeIndex - 1],
        activeClass
      );
    }
  }

  setActiveTab(tab, tabpanel, activeClass) {
    tab.classList.add(activeClass || 'sprk-c-Tabs__button--active');
    tab.setAttribute('tabindex', '0');
    tab.setAttribute('aria-selected', 'true');
    if (tabpanel) {
      tabpanel.classList.remove('sprk-u-HideWhenJs');
    }
    tab.focus();
  }

  constructor(public ref: ElementRef) {
    this.ariaOrientation(window.innerWidth, this.ref.nativeElement);
  }
}
