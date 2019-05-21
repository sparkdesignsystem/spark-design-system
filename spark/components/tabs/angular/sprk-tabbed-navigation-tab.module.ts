import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTabbedNavigationTabDirective } from './sprk-tabbed-navigation-tab.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTabbedNavigationTabDirective],
  exports: [SprkTabbedNavigationTabDirective]
})
export class SprkTabbedNavigationTabModule {}
