import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTabsPanelDirective } from './sprk-tabs-panel.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTabsPanelDirective],
  exports: [SprkTabsPanelDirective],
})
export class SprkTabsPanelModule {}
