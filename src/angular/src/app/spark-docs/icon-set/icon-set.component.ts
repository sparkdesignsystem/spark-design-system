import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-icon-set',
  template: `<div></div>`
})
export class IconSetComponent implements OnInit {
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
