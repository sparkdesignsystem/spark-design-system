import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkSpinnerDirective } from './sprk-spinner.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkSpinnerDirective],
  exports: [SprkSpinnerDirective],
})
export class SprkSpinnerModule {}
