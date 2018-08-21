import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkTableComponent } from './sprk-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkTableComponent,
  ],
  exports: [
    SparkTableComponent,
  ],
})
export class SparkTableModule { }
