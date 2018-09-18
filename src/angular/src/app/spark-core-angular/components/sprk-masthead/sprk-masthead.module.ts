import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkNarrowNavigationItemModule } from '../../../spark-core-angular/components/sprk-narrow-navigation-item/sprk-narrow-navigation-item.module';
import { SparkNarrowNavigationModule } from '../../../spark-core-angular/components/sprk-narrow-navigation/sprk-narrow-navigation.module';
import { SparkSecondaryNavigationItemModule } from '../../../spark-core-angular/components/sprk-secondary-navigation-item/sprk-secondary-navigation-item.module';
import { SparkSecondaryNavigationModule } from '../../../spark-core-angular/components/sprk-secondary-navigation/sprk-secondary-navigation.module';
import { SparkWideNavigationModule } from '../../../spark-core-angular/components/sprk-wide-navigation/sprk-wide-navigation.module';
import { SparkMastheadComponent } from './sprk-masthead.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkSecondaryNavigationItemModule,
    SparkSecondaryNavigationModule,
    SparkWideNavigationModule,
    SparkNarrowNavigationModule,
    SparkNarrowNavigationItemModule
  ],
  declarations: [SparkMastheadComponent],
  exports: [SparkMastheadComponent]
})
export class SparkMastheadModule {}
