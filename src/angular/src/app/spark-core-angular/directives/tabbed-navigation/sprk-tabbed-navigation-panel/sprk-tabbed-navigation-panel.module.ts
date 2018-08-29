import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTabbedNavigationPanelDirective } from './sprk-tabbed-navigation-panel.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTabbedNavigationPanelDirective],
  exports: [SprkTabbedNavigationPanelDirective]
})
export class SprkTabbedNavigationPanelModule {}
