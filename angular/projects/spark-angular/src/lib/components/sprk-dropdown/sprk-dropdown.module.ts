import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { SprkTextModule } from '../../directives/sprk-text/sprk-text.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    RouterModule,
    SprkTextModule,
    SprkStackItemModule,
  ],
  declarations: [SprkDropdownComponent],
  exports: [
    SprkDropdownComponent,
    SprkIconModule,
    SprkLinkDirectiveModule,
    SprkTextModule,
    SprkStackItemModule,
  ],
})
export class SprkDropdownModule {}
