import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkInputDirective } from './sprk-input.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkInputDirective],
  exports: [SprkInputDirective]
})
export class SprkInputModule {}
