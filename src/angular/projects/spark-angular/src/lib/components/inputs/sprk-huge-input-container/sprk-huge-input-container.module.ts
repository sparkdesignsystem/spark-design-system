import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SparkHugeInputContainerComponent } from './sprk-huge-input-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SparkHugeInputContainerComponent],
  exports: [SparkHugeInputContainerComponent]
})
export class SparkHugeInputContainerModule {}
