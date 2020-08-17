import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkSelectDirective } from './sprk-select.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkSelectDirective],
  exports: [SprkSelectDirective],
})
export class SprkSelectModule {}
