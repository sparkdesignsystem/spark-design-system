import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkLegendDirective } from './sprk-legend.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkLegendDirective],
  exports: [SprkLegendDirective],
})
export class SprkLegendModule {}
