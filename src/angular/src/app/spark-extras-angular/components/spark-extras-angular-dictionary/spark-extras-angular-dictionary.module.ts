import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { SparkDictionaryComponent } from './spark-extras-angular-dictionary.component';

@NgModule({
  imports: [CommonModule, SparkCoreAngularModule],
  declarations: [SparkDictionaryComponent],
  exports: [SparkDictionaryComponent]
})
export class SparkDictionaryModule {}
