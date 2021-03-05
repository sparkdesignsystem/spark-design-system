import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkCardHeaderDirective } from './sprk-card-header.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkCardHeaderDirective],
  exports: [SprkCardHeaderDirective],
})
export class SprkCardHeaderModule {}
