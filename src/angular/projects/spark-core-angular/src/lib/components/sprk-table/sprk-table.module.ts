import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SparkTableComponent } from './sprk-table.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkTableComponent],
  exports: [SparkTableComponent]
})
export class SparkTableModule {}
