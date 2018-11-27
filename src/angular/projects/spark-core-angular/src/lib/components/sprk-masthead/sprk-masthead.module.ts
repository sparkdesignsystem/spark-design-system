import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkNarrowNavigationItemModule } from '../sprk-narrow-navigation-item/sprk-narrow-navigation-item.module';
import { SparkNarrowNavigationModule } from '../sprk-narrow-navigation/sprk-narrow-navigation.module';
import { SparkMastheadComponent } from './sprk-masthead.component';
import { SparkDropdownModule } from '../sprk-dropdown/sprk-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule,
    SparkNarrowNavigationModule,
    SparkNarrowNavigationItemModule,
    SparkDropdownModule
  ],
  declarations: [SparkMastheadComponent],
  exports: [SparkMastheadComponent]
})
export class SparkMastheadModule {}
