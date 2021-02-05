import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkToggleModule } from '../sprk-toggle/sprk-toggle.module';
import { SprkAwardComponent } from './sprk-award.component';

@NgModule({
  imports: [
    CommonModule,
    SprkStackModule,
    RouterModule,
    SprkStackItemModule,
    SprkLinkDirectiveModule,
    SprkToggleModule,
  ],
  declarations: [SprkAwardComponent],
  exports: [SprkAwardComponent],
})
export class SprkAwardModule {}
