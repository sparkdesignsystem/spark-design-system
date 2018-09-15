import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SparkDictionaryComponent } from './sprk-dictionary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SparkDictionaryComponent],
  exports: [SparkDictionaryComponent]
})
export class SparkDictionaryModule {}
