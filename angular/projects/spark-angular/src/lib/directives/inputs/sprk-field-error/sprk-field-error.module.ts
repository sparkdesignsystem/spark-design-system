import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkFieldErrorDirective } from './sprk-field-error.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkFieldErrorDirective],
  exports: [SprkFieldErrorDirective]
})
export class SprkFieldErrorModule {}
