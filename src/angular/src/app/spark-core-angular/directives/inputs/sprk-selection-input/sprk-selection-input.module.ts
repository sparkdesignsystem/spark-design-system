import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkSelectionInputDirective } from './sprk-selection-input.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkSelectionInputDirective],
  exports: [SprkSelectionInputDirective]
})
export class SprkSelectionInputModule {}
