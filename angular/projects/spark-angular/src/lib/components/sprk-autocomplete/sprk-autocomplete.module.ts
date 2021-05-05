import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkAutocompleteResultsModule } from './sprk-autocomplete-results/sprk-autocomplete-results.module';
import { SprkAutocompleteResultModule } from './sprk-autocomplete-result/sprk-autocomplete-result.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkAutocompleteResultsModule,
    SprkAutocompleteResultModule,
  ], //todo do we need input here? What do we need routermodule for?
  declarations: [SprkAutocompleteComponent],
  exports: [SprkAutocompleteComponent],
})
export class SprkAutocompleteModule {}
