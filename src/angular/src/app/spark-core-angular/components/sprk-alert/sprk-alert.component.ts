import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-alert',
  template: `
    <div class="sprk-c-Alert" role="alert" data-sprk-alert="container">
      <div [ngClass]="getClasses()">
        <svg class="sprk-c-Icon sprk-c-Icon--l" viewBox="0 0 448 512" aria-hidden="true">
          <use [attr.xlink:href]="icon"></use>
        </svg>
      </div>

      <div class="sprk-c-Alert__text">
        <p class="sprk-b-TypeBodyOne sprk-u-TextColor--gray-dark">
          <ng-content></ng-content>
        </p>
      </div>

      <button class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss" type="button" title="Dismiss" data-sprk-alert="dismiss">
        <svg class="sprk-c-Icon sprk-c-Icon--l" viewBox="0 0 384 512" aria-hidden="true">
          <use xlink:href="#times"></use>
        </svg>
      </button>
    </div>
  `,
  styles: ['']
})

export class SparkAlertComponent {
  @Input() alertType: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  public icon: string;

  getClasses(): string {
    let classArray: Array<String> = [
    'sprk-c-Alert__icon'
    ];

    switch (this.alertType) {
      case 'sucess':
        classArray.push('sprk-c-Alert__icon--success');
        this.icon = '#check';
        break;
      case 'info':
        classArray.push('sprk-c-Alert__icon--info');
          this.icon = '#bell';
        break;
      case 'removal':
        classArray.push('sprk-c-Button--fail');
        this.icon = '#exclamation';
        break;
      default:
        break;
    }

    if(this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

}
