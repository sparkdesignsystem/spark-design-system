import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkTextareaDirective } from './sprk-textarea.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkTextareaDirective],
  exports: [SprkTextareaDirective],
})
export class SprkTextareaModule {}
