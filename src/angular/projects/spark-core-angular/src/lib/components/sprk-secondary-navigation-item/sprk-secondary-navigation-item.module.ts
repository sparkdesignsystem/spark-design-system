import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkSecondaryNavigationItemComponent } from './sprk-secondary-navigation-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkSecondaryNavigationItemComponent],
  exports: [SparkSecondaryNavigationItemComponent]
})
export class SparkSecondaryNavigationItemModule {}
