import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkSelectionItemContainerComponent } from './sprk-selection-item-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkSelectionItemContainerComponent,
  ],
  exports: [
    SparkSelectionItemContainerComponent,
  ],
})
export class SparkSelectionItemContainerModule { }
