import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkTooltipComponent } from './sprk-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule
  ],
  declarations: [SprkTooltipComponent],
  exports: [SprkTooltipComponent]
})
export class SprkTooltipModule {}
