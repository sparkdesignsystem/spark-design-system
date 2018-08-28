import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkDividerComponent } from './sprk-divider.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkDividerComponent],
  exports: [SparkDividerComponent]
})
export class SparkDividerModule {}
