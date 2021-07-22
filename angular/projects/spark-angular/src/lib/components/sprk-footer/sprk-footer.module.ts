import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkTextModule } from '../../directives/sprk-text/sprk-text.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkToggleModule } from '../sprk-toggle/sprk-toggle.module';
import { SprkDividerDirectiveModule } from '../../directives/sprk-divider/sprk-divider.module';
import { SprkFooterComponent } from './sprk-footer.component';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkToggleModule,
    SprkLinkDirectiveModule,
    SprkTextModule,
    RouterModule,
    SprkDividerDirectiveModule,
  ],
  declarations: [SprkFooterComponent],
  exports: [
    SprkStackModule,
    SprkStackItemModule,
    SprkLinkDirectiveModule,
    SprkTextModule,
    SprkFooterComponent,
    SprkDividerDirectiveModule,
  ],
})
export class SprkFooterModule {}
