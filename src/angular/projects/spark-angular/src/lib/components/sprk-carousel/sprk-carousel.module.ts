import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCarouselComponent } from './sprk-carousel.component';

@NgModule({
  imports: [CommonModule, SprkIconModule],
  declarations: [SprkCarouselComponent],
  exports: [SprkCarouselComponent]
})
export class SprkCarouselModule {}
