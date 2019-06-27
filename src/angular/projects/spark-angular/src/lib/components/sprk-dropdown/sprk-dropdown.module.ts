import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { SprkDropdownComponent } from './sprk-dropdown.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule, SprkLinkModule],
  declarations: [SprkDropdownComponent],
  exports: [SprkDropdownComponent]
})
export class SprkDropdownModule {}
