import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SprkIconInputContainerComponent } from './sprk-icon-input-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SprkIconInputContainerComponent],
  exports: [SprkIconInputContainerComponent]
})
export class SprkIconInputContainerModule {}
