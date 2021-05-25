import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkAutocompleteResultsModule } from './sprk-autocomplete-results/sprk-autocomplete-results.module';
import { SprkAutocompleteResultModule } from './sprk-autocomplete-result/sprk-autocomplete-result.module';
import { SprkInputContainerModule } from '../inputs/sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkAutocompleteResultsModule,
    SprkAutocompleteResultModule,
    SprkInputContainerModule,
    SprkInputModule,
    SprkFieldErrorModule,
  ],
  declarations: [SprkAutocompleteComponent],
  exports: [
    SprkAutocompleteComponent,
    SprkIconModule,
    SprkAutocompleteResultsModule,
    SprkAutocompleteResultModule,
    SprkInputContainerModule,
    SprkInputModule,
    SprkFieldErrorModule,
  ],
})
export class SprkAutocompleteModule {}
