import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTabbedNavigationComponent],
  exports: [SprkTabbedNavigationComponent]
})
export class SprkTabbedNavigationModule {}
