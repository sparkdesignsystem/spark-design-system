import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SprkInputContainerComponent } from './sprk-input-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SprkInputContainerComponent],
  exports: [SprkInputContainerComponent],
})
export class SprkInputContainerModule {}
