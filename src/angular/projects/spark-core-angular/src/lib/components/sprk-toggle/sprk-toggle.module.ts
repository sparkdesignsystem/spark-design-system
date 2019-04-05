import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkLinkModule } from '../sprk-link/sprk-link.module';
import { SparkToggleComponent } from './sprk-toggle.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule, SparkLinkModule],
  declarations: [SparkToggleComponent],
  exports: [SparkToggleComponent]
})
export class SparkToggleModule {}
