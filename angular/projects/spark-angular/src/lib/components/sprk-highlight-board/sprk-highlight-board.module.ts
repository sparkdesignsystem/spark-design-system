import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkHeadingModule } from '../../directives/sprk-heading/sprk-heading.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';

@NgModule({
  imports: [
    CommonModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkLinkDirectiveModule,
    SprkHeadingModule,
    RouterModule,
  ],
  declarations: [SprkHighlightBoardComponent],
  exports: [
    SprkHighlightBoardComponent,
    SprkStackItemModule,
    SprkStackModule,
    SprkHeadingModule,
    SprkLinkDirectiveModule,
  ],
})
export class SprkHighlightBoardModule {}
