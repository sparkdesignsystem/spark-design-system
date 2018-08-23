import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkListComponent } from './sprk-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkListComponent,
  ],
  exports: [
    SparkListComponent,
  ],
})
export class SparkListModule { }
