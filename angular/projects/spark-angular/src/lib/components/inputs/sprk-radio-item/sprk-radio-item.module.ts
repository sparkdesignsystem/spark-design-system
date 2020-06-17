import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkRadioItemComponent } from './sprk-radio-item.component';
import { SprkSelectionLabelModule } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.module';

@NgModule({
  imports: [CommonModule, SprkSelectionLabelModule],
  declarations: [SprkRadioItemComponent],
  exports: [SprkRadioItemComponent],
})
export class SprkRadioItemModule {}
