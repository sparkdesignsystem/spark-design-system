import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
import { SprkUnorderedListModule } from '../../../base/lists/angular/sprk-unordered-list.module';
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
