import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkLinkDirective } from './sprk-link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkLinkDirective],
  exports: [SprkLinkDirective]
})
export class SprkLinkDirectiveModule {}
