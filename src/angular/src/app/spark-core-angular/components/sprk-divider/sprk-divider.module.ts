import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkDividerComponent } from './sprk-divider.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkDividerComponent,
  ],
  exports: [
    SparkDividerComponent,
  ],
})
export class SparkDividerModule { }
