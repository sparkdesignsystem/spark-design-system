import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkButtonModule } from '../../directives/sprk-button/sprk-button.module';
import { SprkHeadingModule } from '../../directives/sprk-heading/sprk-heading.module';
import { SprkSpinnerModule } from '../../directives/sprk-spinner/sprk-spinner.module';
import { SprkModalComponent } from './sprk-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkStackItemModule,
    SprkButtonModule,
    SprkHeadingModule,
    SprkSpinnerModule,
  ],
  declarations: [SprkModalComponent],
  exports: [
    SprkModalComponent,
    SprkIconModule,
    SprkStackItemModule,
    SprkButtonModule,
    SprkHeadingModule,
    SprkSpinnerModule,
  ],
})
export class SprkModalModule {}
