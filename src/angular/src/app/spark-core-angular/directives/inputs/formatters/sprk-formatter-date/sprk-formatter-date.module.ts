import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SprkFormatterDateDirective } from './sprk-formatter-date.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SprkFormatterDateDirective,
  ],
  exports: [
    SprkFormatterDateDirective,
  ],
})
export class SprkFormatterDateModule { }
