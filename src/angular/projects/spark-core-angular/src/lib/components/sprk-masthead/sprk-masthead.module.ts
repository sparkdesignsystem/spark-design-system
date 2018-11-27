import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkNarrowNavigationItemModule } from '../sprk-narrow-navigation-item/sprk-narrow-navigation-item.module';
import { SparkNarrowNavigationModule } from '../sprk-narrow-navigation/sprk-narrow-navigation.module';
import { SparkMastheadComponent } from './sprk-masthead.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkNarrowNavigationModule,
    SparkNarrowNavigationItemModule
  ],
  declarations: [SparkMastheadComponent],
  exports: [SparkMastheadComponent]
})
export class SparkMastheadModule {}
