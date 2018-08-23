import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkStackModule } from '../../../spark-core-angular/components/sprk-stack/sprk-stack.module';
import { SparkStackItemModule } from '../../../spark-core-angular/directives/sprk-stack-item/sprk-stack-item.module';
import { SparkHighlightBoardComponent } from './sprk-highlight-board.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkStackModule,
    SparkStackItemModule
  ],
  declarations: [
    SparkHighlightBoardComponent,
  ],
  exports: [
    SparkHighlightBoardComponent,
  ],
})
export class SparkHighlightBoardModule { }
