import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SprkFormatterSsnDirective } from './sprk-formatter-ssn.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SprkFormatterSsnDirective,
  ],
  exports: [
    SprkFormatterSsnDirective,
  ],
})
export class SprkFormatterSsnModule { }
