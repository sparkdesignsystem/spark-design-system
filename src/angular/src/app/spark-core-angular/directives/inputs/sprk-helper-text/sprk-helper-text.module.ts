import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkHelperTextDirective } from './sprk-helper-text.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkHelperTextDirective],
  exports: [SprkHelperTextDirective]
})
export class SprkHelperTextModule {}
