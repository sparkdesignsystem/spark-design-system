import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkStackItemDirective } from './sprk-stack-item.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SparkStackItemDirective,
  ],
  exports: [
    SparkStackItemDirective,
  ],
})
export class SparkStackItemModule { }
