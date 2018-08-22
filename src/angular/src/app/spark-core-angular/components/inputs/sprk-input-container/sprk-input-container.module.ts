import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SparkInputContainerComponent } from './sprk-input-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SparkInputContainerComponent,
  ],
  exports: [
    SparkInputContainerComponent,
  ],
})
export class SparkInputContainerModule { }
