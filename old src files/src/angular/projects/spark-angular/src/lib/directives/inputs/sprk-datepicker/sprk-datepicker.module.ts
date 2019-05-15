import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkDatepickerDirective } from './sprk-datepicker.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkDatepickerDirective],
  exports: [SprkDatepickerDirective]
})
export class SprkDatepickerModule {}
