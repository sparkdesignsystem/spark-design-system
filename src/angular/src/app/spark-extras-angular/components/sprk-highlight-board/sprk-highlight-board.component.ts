import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-highlight-board',
  template: `
    hello! highlight board!
  `,
  styles: ['']
})

export class SparkHighlightBoardComponent {
  @Input() imgOneAlt: string;
  @Input() imgOneHref: string;
  @Input() imgOneSrc: string;
  @Input() analyticsStringImgOne: string;
  @Input() additionalClasses: string;
  @Input() title: string;

  getClasses(): string {
    let classArray: Array<String> = [
      ''
    ];

    return classArray.join(' ');
  }
}
