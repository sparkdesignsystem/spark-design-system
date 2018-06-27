import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SparkCoreAngularModule } from './spark-core-angular/spark-core-angular.module';
import { ButtonDocsComponent } from './button-docs/button-docs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntroDocsComponent } from './intro-docs/intro-docs.component';

const appRoutes: Routes = [
  { path: 'buttons', component: ButtonDocsComponent },
  { path: '', component: IntroDocsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonDocsComponent,
    PageNotFoundComponent,
    IntroDocsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { }
    ),
    BrowserModule,
    SparkCoreAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
