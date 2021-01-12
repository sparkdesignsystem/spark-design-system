import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkSelectDirective } from './sprk-select.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkSelectDirective],
  exports: [SprkSelectDirective],
})
export class SprkSelectModule {}
