import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../../directives/sprk-link/sprk-link.module';
import { SprkMastheadSelectorComponent } from './sprk-masthead-selector.component';

@NgModule({
  imports: [CommonModule, SprkIconModule, SprkLinkDirectiveModule],
  declarations: [SprkMastheadSelectorComponent],
  exports: [SprkMastheadSelectorComponent],
})
export class SprkMastheadSelectorModule {}
