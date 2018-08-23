import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';
import { SparkWideNavigationComponent } from './sprk-wide-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule
  ],
  declarations: [
    SparkWideNavigationComponent,
  ],
  exports: [
    SparkWideNavigationComponent,
  ],
})
export class SparkWideNavigationModule { }
