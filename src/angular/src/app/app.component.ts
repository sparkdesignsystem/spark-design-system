import { Component, ViewEncapsulation } from '@angular/core';
import { SparkCoreAngularModule } from './spark-core-angular/spark-core-angular.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  title = 'Spark-Angular';
}
