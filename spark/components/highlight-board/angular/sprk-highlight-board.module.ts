import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackModule } from '../../../objects/stack/angular/sprk-stack.module';
import { SprkStackItemModule } from '../../../objects/stack/angular/components/sprk-stack-item.module';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
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
