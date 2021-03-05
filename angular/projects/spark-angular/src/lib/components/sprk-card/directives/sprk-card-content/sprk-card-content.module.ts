import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkCardContentDirective } from './sprk-card-content.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkCardContentDirective],
  exports: [SprkCardContentDirective],
})
export class SprkCardContentModule {}
