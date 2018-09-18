import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkSelectionLabelDirective } from './sprk-selection-label.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkSelectionLabelDirective],
  exports: [SprkSelectionLabelDirective]
})
export class SprkSelectionLabelModule {}
