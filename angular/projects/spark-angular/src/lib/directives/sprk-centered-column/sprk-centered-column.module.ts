import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkCenteredColumnDirective } from './sprk-centered-column.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkCenteredColumnDirective],
  exports: [SprkCenteredColumnDirective]
})
export class SprkCenteredColumnModule {}
