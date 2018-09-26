import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { SparkHighlightBoardComponent } from './spark-extras-angular-highlight-board.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkCoreAngularModule],
  declarations: [SparkHighlightBoardComponent],
  exports: [SparkHighlightBoardComponent]
})
export class SparkHighlightBoardModule {}
