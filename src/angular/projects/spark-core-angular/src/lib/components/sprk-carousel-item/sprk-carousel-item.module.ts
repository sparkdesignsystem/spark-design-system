import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkCarouselItemComponent } from './sprk-carousel-item.component';

@NgModule({
  imports: [CommonModule, SparkIconModule],
  declarations: [SparkCarouselItemComponent],
  exports: [SparkCarouselItemComponent]
})
export class SparkCarouselItemModule {}
