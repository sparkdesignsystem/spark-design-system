import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkListItemComponent } from './sprk-list-item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkListItemComponent],
  exports: [SprkListItemComponent]
})
export class SprkListItemModule {}
