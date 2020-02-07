import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SprkSelectionContainerComponent } from './sprk-selection-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SprkSelectionContainerComponent],
  exports: [SprkSelectionContainerComponent]
})
export class SprkSelectionContainerModule {}
