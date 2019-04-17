import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkLinkModule } from '../sprk-link/sprk-link.module';
import { SparkStackModule } from '../sprk-stack/sprk-stack.module';
import { SparkToggleModule } from '../sprk-toggle/sprk-toggle.module';
import { SparkFooterComponent } from './sprk-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule,
    SparkStackModule,
    SprkStackItemModule,
    SparkToggleModule,
    SparkLinkModule
  ],
  declarations: [SparkFooterComponent],
  exports: [SparkFooterComponent]
})
export class SparkFooterModule {}
