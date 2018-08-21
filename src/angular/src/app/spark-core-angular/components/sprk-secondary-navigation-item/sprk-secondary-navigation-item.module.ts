import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';
import { SparkSecondaryNavigationItemComponent } from './sprk-secondary-navigation-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule,
  ],
  declarations: [
    SparkSecondaryNavigationItemComponent,
  ],
  exports: [
    SparkSecondaryNavigationItemComponent,
  ],
})
export class SparkSecondaryNavigationItemModule { }
