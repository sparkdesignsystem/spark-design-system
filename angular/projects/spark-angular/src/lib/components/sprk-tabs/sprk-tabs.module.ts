import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTabsComponent } from './sprk-tabs.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTabsComponent],
  exports: [SprkTabsComponent],
})
export class SprkTabsModule {}
