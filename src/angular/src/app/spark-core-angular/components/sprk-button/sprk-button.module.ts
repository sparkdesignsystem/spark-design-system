import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SparkButtonComponent } from './sprk-button.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkButtonComponent],
  exports: [SparkButtonComponent]
})
export class SparkButtonModule {}
