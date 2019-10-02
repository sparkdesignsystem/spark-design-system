import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkFormatterPhoneNumberDirective } from './sprk-formatter-phone-number.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkFormatterPhoneNumberDirective],
  exports: [SprkFormatterPhoneNumberDirective]
})
export class SprkFormatterPhoneNumberModule {}
