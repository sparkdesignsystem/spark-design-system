import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-text-input',
  template: `
    <div [ngClass]="getClasses()">
      <label for="text-input-normal" class="sprk-b-Label">{{ labelText }}</label>
        <ng-content></ng-content> 
      <div class="sprk-b-ErrorText" id="1">{{ errorMessage }}</div>
    </div>`,
  styles: ['']
})

export class SparkTextInputComponent {
  @Input() additionalClasses: string;
  @Input() labelText: string;
  @Input() errorMessage: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-b-InputContainer',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
