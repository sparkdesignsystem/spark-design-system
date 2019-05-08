import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkLinkModule
  ],
  declarations: [SprkHighlightBoardComponent],
  exports: [SprkHighlightBoardComponent]
})
export class SprkHighlightBoardModule {}
