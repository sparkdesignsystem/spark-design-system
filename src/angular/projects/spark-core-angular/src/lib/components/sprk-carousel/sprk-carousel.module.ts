import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkCarouselComponent } from './sprk-carousel.component';

@NgModule({
  imports: [CommonModule, SparkIconModule],
  declarations: [SparkCarouselComponent],
  exports: [SparkCarouselComponent]
})
export class SparkCarouselModule {}
