import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SparkDictionaryComponent } from './spark-extras-angular-dictionary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SparkDictionaryComponent],
  exports: [SparkDictionaryComponent]
})
export class SparkDictionaryModule {}
