import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkToggleComponent } from './sprk-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule
  ],
  declarations: [SprkToggleComponent],
  exports: [SprkToggleComponent]
})
export class SprkToggleModule {}
