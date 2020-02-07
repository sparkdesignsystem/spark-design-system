import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconComponent } from './sprk-icon.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkIconComponent],
  exports: [SprkIconComponent]
})
export class SprkIconModule {}
