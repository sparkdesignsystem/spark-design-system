import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Spark-Angular';

  constructor(public ref: ElementRef) {}

  ngOnInit(): void {
    window
      .fetch('https://spark-assets.netlify.com/spark-core-icons.svg', {})
      .then(response => response.text())
      .then(svg => {
        this.ref.nativeElement.innerHTML += svg;
      });
  }
}
