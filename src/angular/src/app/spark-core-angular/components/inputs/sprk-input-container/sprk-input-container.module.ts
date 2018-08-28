import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SparkInputContainerComponent } from './sprk-input-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SparkInputContainerComponent],
  exports: [SparkInputContainerComponent]
})
export class SparkInputContainerModule {}
