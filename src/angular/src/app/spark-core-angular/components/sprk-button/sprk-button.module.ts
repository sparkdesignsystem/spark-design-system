import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkButtonComponent } from './sprk-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkButtonComponent,
  ],
  exports: [
    SparkButtonComponent,
  ],
})
export class SparkButtonModule { }
