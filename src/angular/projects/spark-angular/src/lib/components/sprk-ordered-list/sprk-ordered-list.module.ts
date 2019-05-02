import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkOrderedListComponent } from './sprk-ordered-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkOrderedListComponent],
  exports: [SprkOrderedListComponent]
})
export class SprkOrderedListModule {}
