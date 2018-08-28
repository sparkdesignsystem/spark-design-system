import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkStackModule } from '../../../spark-core-angular/components/sprk-stack/sprk-stack.module';
import { SparkToggleModule } from '../../../spark-core-angular/components/sprk-toggle/sprk-toggle.module';
import { SprkStackItemModule } from '../../../spark-core-angular/directives/sprk-stack-item/sprk-stack-item.module';
import { SparkAwardComponent } from './sprk-award.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkStackModule,
    SprkStackItemModule,
    SparkToggleModule
  ],
  declarations: [SparkAwardComponent],
  exports: [SparkAwardComponent]
})
export class SparkAwardModule {}
