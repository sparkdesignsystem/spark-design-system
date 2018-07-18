import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-masthead',
  template: `I'm a masthead!`,
  styles: ['']
})

export class SparkMastheadComponent {
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Masthead'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
