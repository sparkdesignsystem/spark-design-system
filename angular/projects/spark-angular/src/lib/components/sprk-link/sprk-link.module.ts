import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkLinkComponent } from './sprk-link.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkLinkComponent],
  exports: [SprkLinkComponent]
})
export class SprkLinkModule {}
