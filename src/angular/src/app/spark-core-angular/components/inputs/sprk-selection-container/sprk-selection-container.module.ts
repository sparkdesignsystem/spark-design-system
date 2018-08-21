import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkSelectionContainerComponent } from './sprk-selection-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkSelectionContainerComponent,
  ],
  exports: [
    SparkSelectionContainerComponent,
  ],
})
export class SparkSelectionContainerModule { }
