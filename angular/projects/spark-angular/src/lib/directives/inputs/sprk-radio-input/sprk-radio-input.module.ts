import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkRadioInputDirective } from './sprk-radio-input.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkRadioInputDirective],
  exports: [SprkRadioInputDirective]
})
export class SprkRadioInputModule {}
