import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkAwardComponent } from './sprk-award.component';
import { SparkStackModule } from '../../../spark-core-angular/components/sprk-stack/sprk-stack.module';
import { SparkStackItemModule } from '../../../spark-core-angular/directives/sprk-stack-item/sprk-stack-item.module';
import { SparkToggleModule } from '../../../spark-core-angular/components/sprk-toggle/sprk-toggle.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkStackModule,
    SparkStackItemModule,
    SparkToggleModule
  ],
  declarations: [
    SparkAwardComponent,
  ],
  exports: [
    SparkAwardComponent,
  ],
})
export class SparkAwardModule { }
