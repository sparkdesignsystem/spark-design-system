import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkAutocompleteResultDirective } from './sprk-autocomplete-result.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkAutocompleteResultDirective],
  exports: [SprkAutocompleteResultDirective],
})
export class SprkAutocompleteResultModule {}
