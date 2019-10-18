import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCarouselItemComponent } from './sprk-carousel-item.component';

@NgModule({
  imports: [CommonModule, SprkIconModule],
  declarations: [SprkCarouselItemComponent],
  exports: [SprkCarouselItemComponent]
})
export class SprkCarouselItemModule {}
