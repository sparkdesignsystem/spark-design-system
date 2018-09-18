import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStackItemDirective } from './sprk-stack-item.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkStackItemDirective],
  exports: [SprkStackItemDirective]
})
export class SprkStackItemModule {}
