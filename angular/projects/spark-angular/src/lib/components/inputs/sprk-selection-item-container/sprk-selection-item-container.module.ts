import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SprkSelectionItemContainerComponent } from './sprk-selection-item-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SprkSelectionItemContainerComponent],
  exports: [SprkSelectionItemContainerComponent]
})
export class SprkSelectionItemContainerModule {}
