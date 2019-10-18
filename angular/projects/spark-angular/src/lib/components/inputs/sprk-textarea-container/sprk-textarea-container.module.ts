import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SprkTextareaContainerComponent } from './sprk-textarea-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SprkTextareaContainerComponent],
  exports: [SprkTextareaContainerComponent]
})
export class SprkTextareaContainerModule {}
