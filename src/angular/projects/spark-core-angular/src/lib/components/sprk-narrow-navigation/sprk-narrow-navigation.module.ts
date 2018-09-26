import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkNarrowNavigationComponent } from './sprk-narrow-navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkNarrowNavigationComponent],
  exports: [SparkNarrowNavigationComponent]
})
export class SparkNarrowNavigationModule {}
