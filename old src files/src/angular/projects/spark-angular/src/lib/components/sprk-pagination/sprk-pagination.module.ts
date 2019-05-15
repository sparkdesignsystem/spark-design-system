import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { SprkUnorderedListModule } from '../sprk-unordered-list/sprk-unordered-list.module';
import { SprkPaginationComponent } from './sprk-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkUnorderedListModule,
    SprkIconModule,
    SprkLinkModule
  ],
  declarations: [SprkPaginationComponent],
  exports: [SprkPaginationComponent]
})
export class SprkPaginationModule {}
