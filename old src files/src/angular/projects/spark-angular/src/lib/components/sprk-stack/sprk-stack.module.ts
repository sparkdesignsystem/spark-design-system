import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackComponent } from './sprk-stack.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkStackComponent],
  exports: [SprkStackComponent]
})
export class SprkStackModule {}
