import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkHighlightBoardComponent],
  exports: [SprkHighlightBoardComponent]
})
export class SprkHighlightBoardModule {}
