import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkStackModule } from '../../../spark-core-angular/components/sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../../spark-core-angular/directives/sprk-stack-item/sprk-stack-item.module';
import { SparkHighlightBoardComponent } from './sprk-highlight-board.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkStackModule, SprkStackItemModule],
  declarations: [SparkHighlightBoardComponent],
  exports: [SparkHighlightBoardComponent]
})
export class SparkHighlightBoardModule {}
