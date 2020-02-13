import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkBoxDirective } from './sprk-box.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkBoxDirective],
  exports: [SprkBoxDirective]
})
export class SprkBoxModule {}
