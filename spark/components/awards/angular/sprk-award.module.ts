import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackModule } from '../../../objects/stack/angular/sprk-stack.module';
import { SprkStackItemModule } from '../../../objects/stack/angular/components/sprk-stack-item.module';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
import { SprkToggleModule } from '../../toggle/angular/sprk-toggle.module';
import { SprkAwardComponent } from './sprk-award.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkLinkModule,
    SprkToggleModule
  ],
  declarations: [SprkAwardComponent],
  exports: [SprkAwardComponent]
})
export class SprkAwardModule {}
