import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkInputContainerComponent } from './sprk-input-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkInputContainerComponent,
  ],
  exports: [
    SparkInputContainerComponent,
  ],
})
export class SparkInputContainerModule { }
