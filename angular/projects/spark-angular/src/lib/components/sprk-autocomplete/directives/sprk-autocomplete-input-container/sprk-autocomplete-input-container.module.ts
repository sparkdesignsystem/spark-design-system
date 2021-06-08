import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkAutocompleteInputContainerDirective } from './sprk-autocomplete-input-container.directive';
import { SprkInputModule } from '../../../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../../../sprk-icon/sprk-icon.module';

@NgModule({
  imports: [CommonModule, SprkInputModule, SprkIconModule],
  declarations: [SprkAutocompleteInputContainerDirective],
  exports: [
    SprkAutocompleteInputContainerDirective,
    SprkInputModule,
    SprkIconModule,
  ],
})
export class SprkAutocompleteInputContainerModule {}
