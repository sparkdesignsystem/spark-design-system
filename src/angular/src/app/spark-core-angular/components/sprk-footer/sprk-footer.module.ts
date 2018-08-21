import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';
import { SparkStackModule } from '../../../spark-core-angular/components/sprk-stack/sprk-stack.module';
import { SparkStackItemModule } from '../../../spark-core-angular/directives/sprk-stack-item/sprk-stack-item.module';
import { SparkToggleModule } from '../../../spark-core-angular/components/sprk-toggle/sprk-toggle.module';
import { SparkSecondaryNavigationModule } from '../../../spark-core-angular/components/sprk-secondary-navigation/sprk-secondary-navigation.module';
import { SparkSecondaryNavigationItemModule } from '../../../spark-core-angular/components/sprk-secondary-navigation-item/sprk-secondary-navigation-item.module';

import { SparkFooterComponent } from './sprk-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule,
    SparkStackModule,
    SparkStackItemModule,
    SparkToggleModule,
    SparkSecondaryNavigationModule,
    SparkSecondaryNavigationItemModule
  ],
  declarations: [
    SparkFooterComponent,
  ],
  exports: [
    SparkFooterComponent,
  ],
})
export class SparkFooterModule { }
