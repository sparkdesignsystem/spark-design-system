import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SparkCoreAngularModule } from './spark-core-angular/spark-core-angular.module';
import { ButtonDocsComponent } from './button-docs/button-docs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntroDocsComponent } from './intro-docs/intro-docs.component';
import { LinkDocsComponent } from './link-docs/link-docs.component';
import { AlertDocsComponent } from './alert-docs/alert-docs.component';

const appRoutes: Routes = [
  { path: 'alerts', component: AlertDocsComponent },
  { path: 'buttons', component: ButtonDocsComponent },
  { path: 'links', component: LinkDocsComponent },
  { path: '', component: IntroDocsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlertDocsComponent,
    ButtonDocsComponent,
    PageNotFoundComponent,
    IntroDocsComponent,
    LinkDocsComponent,
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
