import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkDictionaryComponent } from './sprk-dictionary.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SparkDictionaryComponent,
  ],
  exports: [
    SparkDictionaryComponent,
  ],
})
export class SparkDictionaryModule { }
