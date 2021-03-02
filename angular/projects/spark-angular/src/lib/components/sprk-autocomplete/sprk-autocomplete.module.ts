import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule], //todo do we need input here? What do we need routermodule for?
  declarations: [SprkAutocompleteComponent],
  exports: [SprkAutocompleteComponent],
})
export class SprkAutocompleteModule {}
