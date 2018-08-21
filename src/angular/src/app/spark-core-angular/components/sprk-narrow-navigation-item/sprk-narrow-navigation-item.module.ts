import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';
import { SparkNarrowNavigationItemComponent } from './sprk-narrow-navigation-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule
  ],
  declarations: [
    SparkNarrowNavigationItemComponent,
  ],
  exports: [
    SparkNarrowNavigationItemComponent,
  ],
})
export class SparkNarrowNavigationItemModule { }
