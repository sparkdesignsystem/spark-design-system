import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkSecondaryNavigationItemModule } from '../sprk-secondary-navigation-item/sprk-secondary-navigation-item.module';
import { SparkSecondaryNavigationModule } from '../sprk-secondary-navigation/sprk-secondary-navigation.module';
import { SparkStackModule } from '../sprk-stack/sprk-stack.module';
import { SparkToggleModule } from '../sprk-toggle/sprk-toggle.module';
import { SparkFooterComponent } from './sprk-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule,
    SparkStackModule,
    SprkStackItemModule,
    SparkToggleModule,
    SparkSecondaryNavigationModule,
    SparkSecondaryNavigationItemModule
  ],
  declarations: [SparkFooterComponent],
  exports: [SparkFooterComponent]
})
export class SparkFooterModule {}
