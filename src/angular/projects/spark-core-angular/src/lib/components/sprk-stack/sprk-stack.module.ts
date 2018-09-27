import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkStackComponent } from './sprk-stack.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkStackComponent],
  exports: [SparkStackComponent]
})
export class SparkStackModule {}
