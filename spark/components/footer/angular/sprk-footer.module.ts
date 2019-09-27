import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackItemModule } from '../../../objects/stack/angular/components/sprk-stack-item.module';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
import { SprkStackModule } from '../../../objects/stack/angular/sprk-stack.module';
import { SprkToggleModule } from '../../toggle/angular/sprk-toggle.module';
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
