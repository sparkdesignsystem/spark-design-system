import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-award',
  template: `
    award
  `,
  styles: ['']
})

export class SparkAwardComponent {
  @Input() awardType: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  public icon: string;

  getClasses(): string {
    let classArray: Array<String> = [
      ''
    ];

    switch (this.awardType) {
      case 'split':
        classArray.push('sprk-o-Stack--splt@m');
        break;
      default:
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
