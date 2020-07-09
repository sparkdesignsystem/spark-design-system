import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkCheckboxItemComponent } from './sprk-checkbox-item.component';
import { SprkSelectionLabelModule } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.module';

@NgModule({
  imports: [CommonModule, SprkSelectionLabelModule],
  declarations: [SprkCheckboxItemComponent],
  exports: [SprkCheckboxItemComponent],
})
export class SprkCheckboxItemModule {}
