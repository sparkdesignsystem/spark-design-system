import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkBoxDirective } from './sprk-box.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkBoxDirective],
  exports: [SprkBoxDirective]
})
export class SprkBoxModule {}
