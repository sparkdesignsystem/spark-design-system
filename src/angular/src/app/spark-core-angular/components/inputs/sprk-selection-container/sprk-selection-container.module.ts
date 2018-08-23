import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SparkSelectionContainerComponent } from './sprk-selection-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SparkSelectionContainerComponent,
  ],
  exports: [
    SparkSelectionContainerComponent,
  ],
})
export class SparkSelectionContainerModule { }
