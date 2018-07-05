import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkButtonComponent } from './components/sprk-button/sprk-button.component';
import { SparkLinkComponent } from './components/sprk-link/sprk-link.component';
import { SparkModalComponent } from './components/sprk-modal/sprk-modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SparkButtonComponent,
    SparkLinkComponent,
    SparkModalComponent
  ],
  exports: [
    SparkButtonComponent,
    SparkLinkComponent,
    SparkModalComponent
  ],
})
export class SparkCoreAngularModule { }
