import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkRadioLabelDirective } from './sprk-radio-label.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkRadioLabelDirective],
  exports: [SprkRadioLabelDirective]
})
export class SprkRadioLabelModule {}
