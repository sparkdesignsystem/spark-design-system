import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-dictionary',
  template: `
    <div [ngClass]="getClasses()">
    <dl class="sprk-c-Dictionary__keyvaluepairs">
      <div *ngFor="let key of objectKeys(data)" class="sprk-c-Dictionary__keyvaluepair">
        <dt class="sprk-c-Dictionary__key sprk-b-Label">{{ key }}</dt>
        <dd class="sprk-c-Dictionary__value">{{ data[key] }}</dd>
      </div>
    </dl>
  </div>`
})

export class SparkDictionaryComponent {
  @Input() data: Object = {};
  @Input() dictionaryType: string = 'base';
  @Input() additionalClasses: string;
  objectKeys: Function = Object.keys;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Dictionary'
    ];

    if (this.dictionaryType === 'striped') {
      classArray.push('sprk-c-Dictionary--striped');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
