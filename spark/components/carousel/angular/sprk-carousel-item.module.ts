import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkCarouselItemComponent } from './sprk-carousel-item.component';

@NgModule({
  imports: [CommonModule, SprkIconModule],
  declarations: [SprkCarouselItemComponent],
  exports: [SprkCarouselItemComponent]
})
export class SprkCarouselItemModule {}
