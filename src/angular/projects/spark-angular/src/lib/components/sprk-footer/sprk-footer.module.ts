import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkToggleModule } from '../sprk-toggle/sprk-toggle.module';
import { SprkFooterComponent } from './sprk-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkToggleModule,
    SprkLinkModule
  ],
  declarations: [SprkFooterComponent],
  exports: [SprkFooterComponent]
})
export class SprkFooterModule {}
