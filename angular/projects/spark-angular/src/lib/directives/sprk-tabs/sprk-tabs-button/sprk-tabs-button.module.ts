import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTabsButtonDirective } from './sprk-tabs-button.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTabsButtonDirective],
  exports: [SprkTabsButtonDirective],
})
export class SprkTabsButtonModule {}
