import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../../directives/sprk-link/sprk-link.module';
import { SprkMastheadSelectorComponent } from './sprk-masthead-selector.component';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    RouterModule,
  ],
  declarations: [SprkMastheadSelectorComponent],
  exports: [SprkMastheadSelectorComponent],
})
export class SprkMastheadSelectorModule {}
