import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { SprkAutocompleteResultsModule } from './directives/sprk-autocomplete-results/sprk-autocomplete-results.module';
import { SprkAutocompleteResultModule } from './directives/sprk-autocomplete-result/sprk-autocomplete-result.module';
import { SprkAutocompleteInputContainerModule } from './directives/sprk-autocomplete-input-container/sprk-autocomplete-input-container.module';
import { SprkInputContainerModule } from '../inputs/sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkAutocompleteResultsModule,
    SprkAutocompleteResultModule,
    SprkAutocompleteInputContainerModule,
    SprkInputContainerModule,
    SprkInputModule,
    SprkFieldErrorModule,
    SprkLabelModule,
  ],
  declarations: [SprkAutocompleteComponent],
  exports: [
    SprkAutocompleteComponent,
    SprkIconModule,
    SprkAutocompleteResultsModule,
    SprkAutocompleteResultModule,
    SprkAutocompleteInputContainerModule,
    SprkInputContainerModule,
    SprkInputModule,
    SprkFieldErrorModule,
    SprkLabelModule,
  ],
})
export class SprkAutocompleteModule {}
