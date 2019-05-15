import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkDividerComponent } from './sprk-divider.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkDividerComponent],
  exports: [SprkDividerComponent]
})
export class SprkDividerModule {}
