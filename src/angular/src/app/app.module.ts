import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SparkCoreAngularModule } from '../../../../packages/spark-core-angular/spark-core-angular.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SparkCoreAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
