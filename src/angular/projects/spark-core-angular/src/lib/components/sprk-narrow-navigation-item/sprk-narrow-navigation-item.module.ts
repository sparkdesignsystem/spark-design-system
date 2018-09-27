import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkNarrowNavigationItemComponent } from './sprk-narrow-navigation-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkNarrowNavigationItemComponent],
  exports: [SparkNarrowNavigationItemComponent]
})
export class SparkNarrowNavigationItemModule {}
