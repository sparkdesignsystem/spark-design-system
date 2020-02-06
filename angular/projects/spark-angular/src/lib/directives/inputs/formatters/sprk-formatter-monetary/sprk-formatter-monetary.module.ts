import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkFormatterMonetaryDirective } from './sprk-formatter-monetary.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkFormatterMonetaryDirective],
  exports: [SprkFormatterMonetaryDirective]
})
export class SprkFormatterMonetaryModule {}
