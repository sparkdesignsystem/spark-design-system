import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { SprkOrderedListModule } from '../sprk-ordered-list/sprk-ordered-list.module';
import { SprkPaginationComponent } from './sprk-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkOrderedListModule,
    SprkIconModule,
    SprkLinkModule
  ],
  declarations: [SprkPaginationComponent],
  exports: [SprkPaginationComponent]
})
export class SprkPaginationModule {}
