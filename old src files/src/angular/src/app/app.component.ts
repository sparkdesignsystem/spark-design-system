import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sprk-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Spark-Angular';

  path = '';
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(val => {
      this.path = this.location.path();
    });
  }
}
