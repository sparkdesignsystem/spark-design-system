import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  Renderer2,
} from '@angular/core';
import { uniqueId } from 'lodash';
import { SprkTabsPanelDirective } from '../../directives/sprk-tabs/sprk-tabs-panel/sprk-tabs-panel.directive';
import { SprkTabsButtonDirective } from '../../directives/sprk-tabs/sprk-tabs-button/sprk-tabs-button.directive';

@Component({
  selector: 'sprk-tabs',
  template: `
    <div
      [ngClass]="getClasses()"
      [attr.data-id]="idString"
      [attr.data-analytics]="analyticsString"
    >
      <div
        [ngClass]="getTablistClasses()"
        role="tablist"
      >
        <ng-content select="[sprkTabsButton]"></ng-content>
      </div>
      <ng-content select="[sprkTabsPanel]"></ng-content>
      <ng-content></ng-content>
    </div>
  `,
})
export class SprkTabsComponent implements AfterContentInit {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * tablist element.
   */
  @Input()
  tablistAdditionalClasses: string;
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
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * This component expects children `<button>` elements
   * with the `SprkTabsButtonDirective` on them.
   * These serve as the Tabs.
   */
  @ContentChildren(SprkTabsButtonDirective)
  tabs: QueryList<SprkTabsButtonDirective>;
  /**
   * This component expects children `<div>` elements
   * with the `SprkTabsPanelDirective` on them.
   * These serve as the Panels.
   */
  @ContentChildren(SprkTabsPanelDirective)
  panels: QueryList<SprkTabsPanelDirective>;
  /**
   * @ignore
   */
  componentID = uniqueId();
  /**
   * @ignore
   */
  activeClass = 'sprk-c-Tabs__button--active';

  /**
   * @ignore
   */
  @HostListener('click', ['$event'])
  onClick($event) {
    if ($event.target.classList.contains('sprk-c-Tabs__button')) {
      const activePanel = this.panels.find((panel) => {
        return (
          panel.ref.nativeElement.id ===
          $event.target.getAttribute('aria-controls')
        );
      });

      this.resetTabs(
        this.tabs.map((tab) => tab.ref.nativeElement),
        this.panels.map((panel) => panel.ref.nativeElement),
        this.activeClass,
      );

      this.setActiveTab(
        $event.target,
        activePanel.ref.nativeElement,
        this.activeClass,
      );
    }
  }

  /**
   * @ignore
   */
  @HostListener('window:resize')
  onResize() {
    this.ariaOrientation(window.innerWidth, this.ref.nativeElement);
  }

  /**
   * @ignore
   */
  @HostListener('keydown', ['$event'])
  onKeydown($event) {
    const isTabsButton = $event.target.classList.contains(
      'sprk-c-Tabs__button',
    );
    if (!isTabsButton) {
      return;
    }

    const keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      tab: 9,
    };

    const tabElements = this.tabs.map((tab) => tab.ref.nativeElement);
    const panelElements = this.panels.map((panel) => panel.ref.nativeElement);

    if ($event.keyCode === keys.left || $event.keyCode === keys.up) {
      this.incrementTab(tabElements, panelElements, this.activeClass, -1);
    } else if ($event.keyCode === keys.right || $event.keyCode === keys.down) {
      this.incrementTab(tabElements, panelElements, this.activeClass, 1);
    } else if ($event.keyCode === keys.tab) {
      if ($event.target.getAttribute('role') === 'tab') {
        $event.preventDefault();
        panelElements[
          this.getActiveTabIndex(tabElements, this.activeClass)
        ].focus();
      }
    } else if ($event.keyCode === keys.home) {
      this.goToEndTab(tabElements, panelElements, this.activeClass, -1);
    } else if ($event.keyCode === keys.end) {
      this.goToEndTab(tabElements, panelElements, this.activeClass, 1);
    }
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Tabs'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getTablistClasses(): string {
    const classArray: string[] = ['sprk-c-Tabs__buttons'];

    if (this.tablistAdditionalClasses) {
      this.tablistAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getContentRelationships(): void {
    let tabIDs = [];
    let panelIDs = [];

    if (this.tabs && this.panels) {
      this.tabs.forEach((tab, index) => {
        const tabID = `tabs-${this.componentID}-tab-${index}`;
        const panelID = `tabs-${this.componentID}-panel-${index}`;

        this.renderer.setAttribute(tab.ref.nativeElement, 'id', tabID);
        this.renderer.setAttribute(
          tab.ref.nativeElement,
          'aria-controls',
          panelID,
        );
        tabIDs.push(tabID);
        panelIDs.push(panelID);
      });

      tabIDs = tabIDs.reverse();
      panelIDs = panelIDs.reverse();

      this.panels.forEach((panel) => {
        this.renderer.setAttribute(
          panel.ref.nativeElement,
          'id',
          panelIDs.pop(),
        );
        this.renderer.setAttribute(
          panel.ref.nativeElement,
          'aria-labelledby',
          tabIDs.pop(),
        );
      });
    }
  }

  /**
   * @ignore
   */
  ngAfterContentInit(): void {
    // Accounting for dynamic changes in the component
    this.panels.changes.subscribe(() => {
      this.getContentRelationships();
    });

    this.getContentRelationships();
  }

  /**
   * @ignore
   */
  ariaOrientation(width, element) {
    // switch aria-orientation on mobile (based on _tabs.scss breakpoint)
    if (width <= 736) {
      this.renderer.setAttribute(element, 'aria-orientation', 'vertical');
    } else {
      this.renderer.setAttribute(element, 'aria-orientation', 'horizontal');
    }
  }

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
  resetTabs(tabs, tabpanels, activeClass) {
    tabs.forEach((tab) => {
      this.renderer.removeClass(
        tab,
        activeClass || 'sprk-c-Tabs__button--active',
      );
      this.renderer.removeAttribute(tab, 'tabindex');
      this.renderer.setAttribute(tab, 'aria-selected', 'false');
      tabpanels.forEach((panel) => {
        this.renderer.addClass(panel, 'sprk-u-HideWhenJs');
      });
    });
  }

  /**
   * @ignore
   */
  incrementTab(tabs, tabpanels, activeClass, direction) {
    let activeIndex = this.getActiveTabIndex(tabs, activeClass);

    let foundNewIndex = false;

    // Start looking for the next available tab
    while (foundNewIndex === false) {
      // if the next tab would be off the left of the tabstrip
      if (activeIndex + direction < 0) {
        // loop to the end and keep looking
        activeIndex = tabs.length;

        // if the next tab would be off the right of the tabstrip
      } else if (activeIndex + direction >= tabs.length) {
        // loop back to the beginning and keep looking
        activeIndex = -1;

        // If the next tab is not disabled
      } else if (!tabs[activeIndex + direction].hasAttribute('disabled')) {
        // move to the next tab
        activeIndex += direction;
        // stop looking for the correct tab
        foundNewIndex = true;
      } else {
        // move to the next tab and keep looking
        activeIndex += direction;
      }
    }

    // deselect all tabs
    this.resetTabs(tabs, tabpanels, activeClass);
    // select the correct tab
    this.setActiveTab(tabs[activeIndex], tabpanels[activeIndex], activeClass);
  }

  /**
   * @ignore
   */
  goToEndTab(tabs, tabpanels, activeClass, direction) {
    let newActiveIndex;

    // if direction is positive, go to the right-most tab
    if (direction > 0) {
      newActiveIndex = tabs.length - 1;

      // else go to the left-most tab
    } else {
      newActiveIndex = 0;
    }

    let foundNewIndex = false;

    // step through the tabs until we find one that isn't disabled
    while (foundNewIndex === false) {
      // if this tab is not disabled
      if (!tabs[newActiveIndex].hasAttribute('disabled')) {
        // stop looking for the correct tab
        foundNewIndex = true;

        // else step one tab away from the end and keep looking
      } else {
        newActiveIndex -= direction;
      }
    }

    this.resetTabs(tabs, tabpanels, activeClass);
    this.setActiveTab(
      tabs[newActiveIndex],
      tabpanels[newActiveIndex],
      activeClass,
    );
  }

  /**
   * @ignore
   */
  setActiveTab(tab, tabpanel, activeClass) {
    this.renderer.addClass(tab, activeClass || 'sprk-c-Tabs__button--active');
    this.renderer.setAttribute(tab, 'tabindex', '0');
    this.renderer.setAttribute(tab, 'aria-selected', 'true');
    if (tabpanel) {
      this.renderer.removeClass(tabpanel, 'sprk-u-HideWhenJs');
    }
    tab.focus();
  }

  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {
    this.ariaOrientation(window.innerWidth, this.ref.nativeElement);
  }
}
