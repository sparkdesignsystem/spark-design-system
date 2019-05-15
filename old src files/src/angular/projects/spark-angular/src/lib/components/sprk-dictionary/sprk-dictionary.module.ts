import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkDictionaryComponent } from './sprk-dictionary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkDictionaryComponent],
  exports: [SprkDictionaryComponent]
})
export class SprkDictionaryModule {}
