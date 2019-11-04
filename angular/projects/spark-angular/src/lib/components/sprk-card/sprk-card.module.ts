import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCardComponent } from './sprk-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkLinkModule,
    SprkStackModule,
    SprkStackItemModule,
  ],
  declarations: [SprkCardComponent],
  exports: [SprkCardComponent]
})
export class SprkCardModule {}
