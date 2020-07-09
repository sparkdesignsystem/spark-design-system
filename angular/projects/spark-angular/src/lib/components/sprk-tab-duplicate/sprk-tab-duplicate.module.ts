import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTabDuplicateComponent } from './sprk-tab-duplicate.component';
import {SprkTabbedNavigationComponent} from '../sprk-tabbed-navigation/sprk-tabbed-navigation.component'
import {
  SprkTabbedNavigationTabDirective
} from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTabDuplicateComponent, SprkTabbedNavigationComponent, SprkTabbedNavigationPanelDirective, SprkTabbedNavigationTabDirective],
  exports: [SprkTabDuplicateComponent]
})
export class SprkTabDuplicateModule {}
