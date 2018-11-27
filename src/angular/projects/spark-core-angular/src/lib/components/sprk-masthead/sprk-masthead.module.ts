import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkNarrowNavigationItemModule } from '../sprk-narrow-navigation-item/sprk-narrow-navigation-item.module';
import { SparkNarrowNavigationModule } from '../sprk-narrow-navigation/sprk-narrow-navigation.module';
import { SparkSecondaryNavigationItemModule } from '../sprk-secondary-navigation-item/sprk-secondary-navigation-item.module';
import { SparkSecondaryNavigationModule } from '../sprk-secondary-navigation/sprk-secondary-navigation.module';
import { SparkMastheadComponent } from './sprk-masthead.component';
import { SparkDropdownModule } from '../sprk-dropdown/sprk-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkSecondaryNavigationItemModule,
    SparkSecondaryNavigationModule,
    SparkNarrowNavigationModule,
    SparkNarrowNavigationItemModule,
    SparkDropdownModule
  ],
  declarations: [SparkMastheadComponent],
  exports: [SparkMastheadComponent]
})
export class SparkMastheadModule {}
