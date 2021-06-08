import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkAutocompleteResultsDirective } from './sprk-autocomplete-results.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkAutocompleteResultsDirective],
  exports: [SprkAutocompleteResultsDirective],
})
export class SprkAutocompleteResultsModule {}
