import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkRadioComponent } from './sprk-radio.component';
import { SprkSelectionLabelModule } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.module';

@NgModule({
  imports: [CommonModule, SprkSelectionLabelModule],
  declarations: [SprkRadioComponent],
  exports: [SprkRadioComponent],
})
export class SprkRadioModule {}
