import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SprkHugeInputContainerComponent } from './sprk-huge-input-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SprkHugeInputContainerComponent],
  exports: [SprkHugeInputContainerComponent]
})
export class SprkHugeInputContainerModule {}
