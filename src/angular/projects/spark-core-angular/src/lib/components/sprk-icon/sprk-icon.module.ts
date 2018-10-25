import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconComponent } from './sprk-icon.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkIconComponent],
  exports: [SparkIconComponent]
})
export class SparkIconModule {}
