import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SparkSelectionItemContainerComponent } from './sprk-selection-item-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SparkSelectionItemContainerComponent,
  ],
  exports: [
    SparkSelectionItemContainerComponent,
  ],
})
export class SparkSelectionItemContainerModule { }
