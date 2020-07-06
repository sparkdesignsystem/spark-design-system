import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkTooltipComponent } from './sprk-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
  ],
  declarations: [SprkTooltipComponent],
  exports: [SprkTooltipComponent]
})
export class SprkTooltipModule {}
