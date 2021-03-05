import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkCardMediaDirective } from './sprk-card-media.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkCardMediaDirective],
  exports: [SprkCardMediaDirective],
})
export class SprkCardMediaModule {}
