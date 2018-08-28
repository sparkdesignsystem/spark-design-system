import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkListModule } from '../../../spark-core-angular/components/sprk-list/sprk-list.module';
import { SparkPaginationComponent } from './sprk-pagination.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkListModule],
  declarations: [SparkPaginationComponent],
  exports: [SparkPaginationComponent]
})
export class SparkPaginationModule {}
