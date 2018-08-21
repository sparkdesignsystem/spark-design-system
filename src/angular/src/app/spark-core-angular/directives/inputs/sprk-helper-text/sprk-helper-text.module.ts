import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SprkHelperTextDirective } from './sprk-helper-text.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SprkHelperTextDirective,
  ],
  exports: [
    SprkHelperTextDirective,
  ],
})
export class SprkHelperTextModule { }
