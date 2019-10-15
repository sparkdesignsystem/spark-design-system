import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkUnorderedListComponent } from './sprk-unordered-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkUnorderedListComponent],
  exports: [SprkUnorderedListComponent]
})
export class SprkUnorderedListModule {}
