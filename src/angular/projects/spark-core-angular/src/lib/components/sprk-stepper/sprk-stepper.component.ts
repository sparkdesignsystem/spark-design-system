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
  getActiveTabIndex,
  resetTabs,
  retreatTab,
  setActiveTab
} from '@sparkdesignsystem/spark-core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-stepper',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString"></div>
  `
})
export class SparkStepperComponent implements AfterContentInit {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;
  @ContentChildren(SparkStepperComponent)
  // tabs: QueryList<SprkStepperComponentTabDirective>;
  // @ContentChildren(SprkStepperComponentPanelDirective)
  // panels: QueryList<SprkStepperComponentPanelDirective>;
  componentID = _.uniqueId();
  activeClass = 'sprk-c-Stepper__step--selected';

  @HostListener('click', ['$event'])
  onClick($event) {
    if ($event.target.classList.contains('sprk-c-Stepper__step--selected')) {
      const activePanel = this.panels.find(panel => {
        return (
          panel.ref.nativeElement.id ===
          $event.target.getAttribute('aria-controls')
        );
      });

      resetTabs(
        this.tabs.map(tab => tab.ref.nativeElement),
        this.panels.map(panel => panel.ref.nativeElement),
        this.activeClass
      );

      setActiveTab(
        $event.target,
        activePanel.ref.nativeElement,
        this.activeClass
      );
    }
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
      retreatTab(tabElements, panelElements, this.activeClass);
    } else if ($event.keyCode === keys.right || $event.keyCode === keys.down) {
      advanceTab(tabElements, panelElements, this.activeClass);
    } else if ($event.keyCode === keys.tab) {
      if ($event.target.getAttribute('role') === 'tab') {
        event.preventDefault();
        panelElements[getActiveTabIndex(tabElements, this.activeClass)].focus();
      }
    } else if ($event.keyCode === keys.home) {
      setActiveTab(tabElements[0], panelElements[0], this.activeClass);
    } else if ($event.keyCode === keys.end) {
      setActiveTab(
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
}
