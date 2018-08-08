import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';

@Component({
  selector: 'sprk-tabbed-navigation',
  template: `
    <div [ngClass]="getClasses()" role="tablist" [attr.aria-orientation]="orientation">
      <div class="sprk-c-Tabs__buttons">
        <ng-content select="sprk-tabbed-navigation-tab"></ng-content> 
      </div>
      <ng-content></ng-content>
    </div>`
})

export class SparkTabbedNavigationComponent implements OnInit {
  @Input() additionalClasses: string;
  @Input() orientation: string = 'horizontal';

  @ContentChildren(SprkTabbedNavigationTabDirective) tabs: QueryList<SprkTabbedNavigationTabDirective>;

  getClasses(): string {
    let classArray: Array<String> = ['sprk-c-Tabs'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  ngOnInit():void {
    console.log(this.tabs);
  }
}
