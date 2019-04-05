import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkLinkModule } from '../sprk-link/sprk-link.module';
import { SparkUnorderedListModule } from '../sprk-unordered-list/sprk-unordered-list.module';
import { SparkPaginationComponent } from './sprk-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkUnorderedListModule,
    SparkIconModule,
    SparkLinkModule
  ],
  declarations: [SparkPaginationComponent],
  exports: [SparkPaginationComponent]
})
export class SparkPaginationModule {}
