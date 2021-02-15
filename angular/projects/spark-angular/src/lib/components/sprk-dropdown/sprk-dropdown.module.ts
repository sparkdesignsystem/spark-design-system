import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { SprkTextModule } from '../../directives/sprk-text/sprk-text.module';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    RouterModule,
    SprkTextModule,
  ],
  declarations: [SprkDropdownComponent],
  exports: [SprkDropdownComponent],
})
export class SprkDropdownModule {}
