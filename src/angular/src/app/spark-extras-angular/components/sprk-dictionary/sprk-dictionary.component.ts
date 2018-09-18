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
  @Input()
  data: object = {};
  @Input()
  dictionaryType = 'base';
  @Input()
  additionalClasses: string;
  objectKeys = Object.keys;

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Dictionary'];

    if (this.dictionaryType === 'striped') {
      classArray.push('sprk-c-Dictionary--striped');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
