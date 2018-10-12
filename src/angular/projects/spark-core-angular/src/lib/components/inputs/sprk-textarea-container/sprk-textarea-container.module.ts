import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SparkTextareaContainerComponent } from './sprk-textarea-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SparkTextareaContainerComponent],
  exports: [SparkTextareaContainerComponent]
})
export class SparkTextareaContainerModule {}
